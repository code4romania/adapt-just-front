<template>
  <v-row v-bind="$attrs">
    <v-col>
      <v-row>
        <v-col>
          <dashboard-page-header>
            <template #navigation>
              <slot name="navigation"/>
            </template>
            <template #title>
              <slot name="title"/>
            </template>
            <template #actions>
              <slot name="actions"/>
            </template>
          </dashboard-page-header>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <div class="workspace">
            <slot name="workspace" />
          </div>
        </v-col>
      </v-row>
    </v-col>
  </v-row>

</template>

<script>
export default {
  data() {
    return{
    }
  },
}
</script>

<style lang="scss">
.workspace{
}
</style>
