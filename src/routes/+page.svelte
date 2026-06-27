<script lang="ts">
  import Canvas from "$lib/components/Canvas.svelte";
  import Sidebar from "$lib/components/Sidebar.svelte";
</script>

<div class = "flex h-screen w-screen bg-slate-950 overflow-hidden">
    <!-- Canvas -->
    <div class = "w-[75vw] h-full relative">
        <Canvas />
    </div> 
    <!-- Sidebar -->
    <div class = "w-[25vw] h-full bg-slate-900 border-l border-slate-800">
        <Sidebar />
    </div>
</div>

<style>
    
</style>