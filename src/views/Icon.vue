<template>
  <svg>
    <use xlink:href="#money"/>
  </svg>
</template>


<script lang="ts">
  const importAll = (requireContext: __WebpackModuleApi.RequireContext)=>requireContext.keys().forEach(requireContext)
  try { importAll(require.context('../assets/icons',true,/\.svg$/)) }catch(error){ console.log(error) }
  export default {
    name: 'Icon'
  };
</script>

<style lang="scss" scoped>

</style>