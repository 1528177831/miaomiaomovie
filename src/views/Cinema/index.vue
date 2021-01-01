<template>
  <div id="main">
    <Header title="喵喵影院"/>
    <div id="content">
      <CMenu/>
      <CList/>
    </div>
    <TabBar/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import TabBar from '@/components/TabBar'
import CList from '@/components/CinemaList'
import CMenu from '@/components/CinemaMenu'
export default {
  name: 'Cinema',
  components: {
    Header,
    TabBar,
    CList,
    CMenu
  }
}
</script>

<style>

</style>
