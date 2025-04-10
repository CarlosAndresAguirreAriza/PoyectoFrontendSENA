import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

const urlMaterial = import.meta.env.VITE_API_URL_MATERIALS
const urlService = import.meta.env.VITE_API_URL_SERVICES

const useInfoStore = create(
  devtools(
    (set, get) => ({
      materials: [],
      services: [],
      groupedMaterials: [],
      isLoading: false,
      error: null,

      agruparPorCategoria: (materials) => {
        const agrupados = {}
        for (const material of materials) {
          const categoria = material.base_info.category
          if (!agrupados[categoria]) {
            agrupados[categoria] = []
          }
          agrupados[categoria].push(material)
        }
        return Object.keys(agrupados).map((categoria) => ({
          category: categoria,
          items: agrupados[categoria],
        }))
      },

      fetchMaterials: async () => {
        const storedMaterials = sessionStorage.getItem('materials')
        if (storedMaterials) {
          set({
            materials: JSON.parse(storedMaterials),
            groupedMaterials: get().agruparPorCategoria(JSON.parse(storedMaterials)),
          }, false, 'fetchMaterials/cached')
          return
        }

        set({ isLoading: true }, false, 'fetchMaterials/start')

        try {
          const response = await fetch(urlMaterial)
          if (!response.ok) throw new Error('Error al cargar los materiales')

          const materials = await response.json()
          sessionStorage.setItem('materials', JSON.stringify(materials))

          set({
            materials,
            groupedMaterials: get().agruparPorCategoria(materials),
            isLoading: false,
          }, false, 'fetchMaterials/success')
        } catch (error) {
          set({ error, isLoading: false }, false, 'fetchMaterials/error')
        }
      },

      fetchServices: async () => {
        if (get().services.length > 0) return

        const storedServices = sessionStorage.getItem('services')
        if (storedServices) {
          set({ services: JSON.parse(storedServices) }, false, 'fetchServices/cached')
          return
        }

        set({ isLoading: true }, false, 'fetchServices/start')

        try {
          const response = await fetch(urlService)
          if (!response.ok) throw new Error('Error al cargar los servicios')

          const services = await response.json()
          sessionStorage.setItem('services', JSON.stringify(services))

          set({ services, isLoading: false }, false, 'fetchServices/success')
        } catch (error) {
          set({ error, isLoading: false }, false, 'fetchServices/error')
        }
      },

      infoTableService: (service) => {
        const materials = get().materials
        return materials.map((material) => {
          let isCompatible = false
          let thicknessMin = 0
          let thicknessMax = 0

          material.thicknesses.forEach((thickness) => {
            if (thickness.compatibility_cut[service.base_info.code]) {
              if (thicknessMin === 0) thicknessMin = thickness.value
              isCompatible = true
              thicknessMax = thickness.value
            }
          })

          thicknessMin = Number(thicknessMin)
          thicknessMax = Number(thicknessMax)

          return {
            material: material.base_info.name,
            compatibility: isCompatible,
            thickness: `${thicknessMin.toFixed(1)} mm - ${thicknessMax.toFixed(1)} mm`,
          }
        })
      },
    }),
    { name: 'InfoStore' } 
  )
)

export default useInfoStore