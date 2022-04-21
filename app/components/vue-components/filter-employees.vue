<template>
  <div >
    {{firstName}}
  </div>
</template>

<script>

export default {
  name: "FilterEmployeesComponent",
props: {
    firstName: String,
    lastName: String
  }
};
</script>
