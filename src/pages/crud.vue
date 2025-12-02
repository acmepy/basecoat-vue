<script setup>
import { ref, computed } from "vue";
import UiIcon from "../components/ui-icon.vue";

// Datos de ejemplo
const rows = ref([
  { id: 1, nombre: "Juan", correo: "juan@example.com", rol: "Admin" },
  { id: 2, nombre: "María", correo: "maria@example.com", rol: "Usuario" },
  { id: 3, nombre: "Pedro", correo: "pedro@example.com", rol: "Editor" },
]);

// Texto de búsqueda
const search = ref("");

// Filtrado dinámico en todos los campos
const filteredRows = computed(() => {
  if (!search.value) return rows.value;

  return rows.value.filter((row) =>
    Object.values(row).some((val) =>
      String(val).toLowerCase().includes(search.value.toLowerCase())
    )
  );
});
</script>

<template>
  <section class="poverflow-x-auto w-full">
    <div class="relative my-3">
      <span class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <UiIcon iconify="material-symbols:search" />
      </span>
      <input v-model="search" type="text" placeholder="Buscar..."
        class="pl-10 pr-4 py-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-primary" />
    </div>
    <div></div>
    <!-- Tabla -->
    <table class="table">
      <thead>
        <tr>
          <th class="border p-2">ID</th>
          <th class="border p-2">Nombre</th>
          <th class="border p-2">Correo</th>
          <th class="border p-2">Rol</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in filteredRows" :key="row.id" class="hover:bg-gray-1000">
          <td class="border p-2">{{ row.id }}</td>
          <td class="border p-2">{{ row.nombre }}</td>
          <td class="border p-2">{{ row.correo }}</td>
          <td class="border p-2">{{ row.rol }}</td>
        </tr>
        <tr v-if="filteredRows.length === 0">
          <td colspan="4" class="p-3 text-center text-gray-500">No se encontraron resultados</td>
        </tr>
      </tbody>
    </table>
  </section>

</template>