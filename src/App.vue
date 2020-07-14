<template>
  <div id="app" class="text-center">
    <keep-alive>
      <router-view/>
    </keep-alive>
      <div id="" class="fixed-bottom row">
      <div class="c col-4">
        <router-link to="/"><font-awesome-icon :icon="['far','clock']" size="3x" color="#ADADAD"></font-awesome-icon></router-link>
        </div>
      <div class="c col-4"><router-link to="/list">
        <font-awesome-icon :icon="['fas','list-ul']" size="3x" color="#ADADAD"></font-awesome-icon></router-link>
      </div>
      <div class="c  col-4">
        <div class="col-">
        <router-link to="/settings"><font-awesome-icon :icon="['fas','cogs']" size="3x" color="#ADADAD"></font-awesome-icon></router-link>
        </div>
      </div>
    </div>
  </div>
</template>
