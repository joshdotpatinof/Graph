<script lang="ts">

</script>

<div class ="flex flex-col h-full p-6 text-slate-200 justify-between">
    <div class="space-y-6">
        <div>
            <h1 class="text-xl font-bold tracking-wider text-cyan-400 font-mono">
                GRAPH
            </h1>
            <p class="text-xs text-slate-400 mt-1">CP Input Visualizer</p>
        </div>

        <div class="flex flex-col gap-2">
            <label for="algorithm-selector" class="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Algorithm
            </label>
            <select name="algorithm" id="algorithm-selector" class="w-full bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-cyan-500">
                <option value="">Select An Algorithm</option>
                <option value="bfs">Breadth-First Search</option>
                <option value="dfs">Depth-First Search</option>
                <option value="dijkstra">Dijkstra's</option>
            </select>
        </div>

        <div class="flex flex-col gap-2">
            <label for="animation-speed" class="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Delay Speed
            </label>
            <input type="range" min="1" max="100" value="50" class="w-full accent-cyan-500 cursor-pointer" id="animation-speed">
        </div>
    </div>


    <div class="flex flex-col gap-2">
        <label for="cp-input" class="text-xs font-semibold uppercase tracking-wider text-slate-400">
            Test Case Input
        </label>
        <textarea id="cp-input" rows="6" class="w-full bg-slate-500 border border-slate-800 rounded-lg p-3 font-mono text-xs text-emerald-400 focus:outline-none focus:border-emerald-600 resize-none" placeholder="Paste graph input here..."></textarea>
    </div>
    
    
    <div class="mt-auto pt-6 space-y-2">
        <button class="w-full bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium py-2.5 px-4 rounded-xl shadow-lg shadow-cyan-500/10 transition-all text-sm">
            Run Animation
        </button>
        <div class="grid grid-cols-2 gap-2">
            <button class="bg-slate-800 hover:bg-slate-750 border border-slate-700 text-slate-300 font-medium py-2 px-3 rounded-xl transition-all text-xs">
                Clear
            </button>
            <button class="bg-slate-800 hover:bg-slate-750 border border-slate-700 text-slate-300 font-medium py-2 px-3 rounded-xl transition-all text-xs">
                Randomize
            </button>
        </div>
    </div>
</div>