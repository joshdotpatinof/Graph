<script lang="ts">
  let zoom = 1;
  let showSettings = false;

  const zoomIn = () => {
    zoom = Math.min(zoom + 0.1, 2);
  };

  const zoomOut = () => {
    zoom = Math.max(zoom - 0.1, 0.4);
  };

  const toggleSettings = () => {
    showSettings = !showSettings;
  };
</script>

<div class="relative h-full w-full bg-slate-950 overflow-hidden">
  <div class="absolute inset-0" style="background-image: linear-gradient(rgba(148,163,184,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.14) 1px, transparent 1px); background-size: 40px 40px;"></div>
  <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.08)_0%,transparent_35%)] pointer-events-none"></div>

  <div class="absolute top-4 right-4 z-10 flex items-center gap-2 rounded-3xl border border-slate-700 bg-slate-900/95 p-3 shadow-xl shadow-slate-950/40 backdrop-blur-sm">
    <button type="button" on:click={toggleSettings} class="rounded-full bg-slate-800 px-3 py-2 text-slate-100 transition hover:bg-slate-700">
      ⚙
    </button>
    <button type="button" on:click={zoomIn} class="rounded-full bg-cyan-500 px-3 py-2 text-slate-950 font-semibold transition hover:bg-cyan-400">
      +
    </button>
    <button type="button" on:click={zoomOut} class="rounded-full bg-slate-800 px-3 py-2 text-slate-100 transition hover:bg-slate-700">
      –
    </button>
    <span class="ml-2 text-xs text-slate-300">{Math.round(zoom * 100)}%</span>
  </div>

  <div class="relative flex h-full w-full items-center justify-center px-8">
    <div class="rounded-3xl border border-slate-800 bg-slate-950/80 px-6 py-8 text-center text-slate-300 shadow-inner shadow-slate-950/50 backdrop-blur-sm">
      <p class="text-sm uppercase tracking-[0.35em] text-slate-500">Graph Canvas</p>
      <p class="mt-4 text-2xl font-semibold text-slate-100">Canvas playground is ready.</p>
      <p class="mt-2 max-w-sm text-sm text-slate-400">Use the controls to zoom and configure the visualization. Node rendering and parser wiring come next.</p>
    </div>
  </div>

  {#if showSettings}
    <div class="absolute top-24 right-4 z-10 w-72 rounded-3xl border border-slate-700 bg-slate-900/95 p-4 shadow-2xl shadow-slate-950/40">
      <h2 class="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Canvas settings</h2>
      <p class="mt-3 text-sm text-slate-400">This panel will hold rendering and layout options.</p>
    </div>
  {/if}
</div>
