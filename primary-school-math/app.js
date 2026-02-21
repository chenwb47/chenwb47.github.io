// 小学1-6年级完整知识图谱（59个核心节点）
const knowledgeData = {
    // 一年级（基础层）
    "1-数数": { grade: 1, deps: [], desc: "10以内数的认识" },
    "1-比大小": { grade: 1, deps: ["1-数数"], desc: "比较大小" },
    "1-加减法": { grade: 1, deps: ["1-比大小"], desc: "10以内加减" },
    "1-进位加": { grade: 1, deps: ["1-加减法"], desc: "20以内进位" },
    "1-认识图形": { grade: 1, deps: [], desc: "基础图形" },
    "1-认识钟表": { grade: 1, deps: ["1-数数"], desc: "整点时间" },

    // 二年级（进阶层）
    "2-乘法口诀": { grade: 2, deps: ["1-进位加"], desc: "表内乘法" },
    "2-除法": { grade: 2, deps: ["2-乘法口诀"], desc: "表内除法" },
    "2-长度单位": { grade: 2, deps: ["1-比大小"], desc: "米厘米" },
    "2-角的认识": { grade: 2, deps: ["1-认识图形"], desc: "角的初步" },
    "2-观察物体": { grade: 2, deps: ["1-认识图形"], desc: "不同视角" },
    "2-数据收集": { grade: 2, deps: ["1-数数"], desc: "简单统计" },

    // 三年级（应用层）
    "3-万以内数": { grade: 3, deps: ["2-乘法口诀"], desc: "大数认识" },
    "3-多位数加减": { grade: 3, deps: ["3-万以内数", "1-进位加"], desc: "竖式计算" },
    "3-多位数乘法": { grade: 3, deps: ["3-多位数加减", "2-乘法口诀"], desc: "笔算乘法" },
    "3-除数一位": { grade: 3, deps: ["3-多位数乘法", "2-除法"], desc: "除法竖式" },
    "3-分数初步": { grade: 3, deps: ["2-除法"], desc: "分数认识" },
    "3-小数初步": { grade: 3, deps: ["3-分数初步"], desc: "小数意义" },
    "3-长方形正方形": { grade: 3, deps: ["2-角的认识"], desc: "四边形" },
    "3-周长": { grade: 3, deps: ["3-长方形正方形", "2-长度单位"], desc: "周长计算" },
    "3-面积": { grade: 3, deps: ["3-周长", "3-多位数乘法"], desc: "面积计算" },
    "3-时间计算": { grade: 3, deps: ["1-认识钟表"], desc: "时分秒" },
    "3-复式统计": { grade: 3, deps: ["2-数据收集"], desc: "复式统计表" },
    "3-位置方向": { grade: 3, deps: ["2-观察物体"], desc: "东南西北" },
    "3-倍的认识": { grade: 3, deps: ["2-乘法口诀", "2-除法"], desc: "倍数关系" },
    "3-解决问题-连乘": { grade: 3, deps: ["3-多位数乘法", "3-倍的认识"], desc: "连乘应用" },
    "3-解决问题-连除": { grade: 3, deps: ["3-除数一位", "3-解决问题-连乘"], desc: "连除应用" },
    "3-等量代换": { grade: 3, deps: ["3-解决问题-连除"], desc: "初步代数" },
    "3-集合": { grade: 3, deps: ["3-复式统计"], desc: "韦恩图" },

    // 四年级（拓展层）
    "4-大数认识": { grade: 4, deps: ["3-万以内数"], desc: "亿以内数" },
    "4-三位数乘两位数": { grade: 4, deps: ["3-多位数乘法"], desc: "整数乘法拓展" },
    "4-除数两位数": { grade: 4, deps: ["3-除数一位"], desc: "整数除法拓展" },
    "4-四则运算": { grade: 4, deps: ["3-解决问题-连乘", "3-解决问题-连除"], desc: "运算顺序" },
    "4-运算定律": { grade: 4, deps: ["4-四则运算"], desc: "交换律结合律分配律" },
    "4-小数意义": { grade: 4, deps: ["3-小数初步"], desc: "小数深入理解" },
    "4-小数加减": { grade: 4, deps: ["4-小数意义"], desc: "小数运算" },
    "4-三角形": { grade: 4, deps: ["3-长方形正方形"], desc: "三角形性质" },
    "4-平行四边形梯形": { grade: 4, deps: ["4-三角形"], desc: "四边形分类" },
    "4-平均数": { grade: 4, deps: ["3-复式统计"], desc: "统计量" },
    "4-条形统计图": { grade: 4, deps: ["4-平均数"], desc: "统计图绘制" },

    // 五年级（深化层）
    "5-小数乘法": { grade: 5, deps: ["4-小数加减"], desc: "小数乘整数小数" },
    "5-小数除法": { grade: 5, deps: ["5-小数乘法"], desc: "小数除法运算" },
    "5-简易方程": { grade: 5, deps: ["3-等量代换"], desc: "用字母表示数" },
    "5-方程应用": { grade: 5, deps: ["5-简易方程"], desc: "列方程解应用题" },
    "5-多边形面积": { grade: 5, deps: ["4-三角形", "4-平行四边形梯形"], desc: "面积公式推导" },
    "5-长方体正方体": { grade: 5, deps: ["3-面积"], desc: "立体图形认识" },
    "5-体积": { grade: 5, deps: ["5-长方体正方体"], desc: "体积计算" },
    "5-因数倍数": { grade: 5, deps: ["4-除数两位数"], desc: "数的性质" },
    "5-分数意义": { grade: 5, deps: ["3-分数初步"], desc: "分数深入理解" },
    "5-分数加减": { grade: 5, deps: ["5-分数意义"], desc: "分数运算" },
    "5-折线统计图": { grade: 5, deps: ["4-条形统计图"], desc: "趋势分析" },
    "5-可能性": { grade: 5, deps: ["3-集合"], desc: "概率初步" },

    // 六年级（综合层）
    "6-分数乘法": { grade: 6, deps: ["5-分数加减"], desc: "分数乘法运算" },
    "6-分数除法": { grade: 6, deps: ["6-分数乘法"], desc: "分数除法运算" },
    "6-比和比例": { grade: 6, deps: ["6-分数除法"], desc: "比的意义性质" },
    "6-百分数": { grade: 6, deps: ["6-比和比例"], desc: "百分数应用" },
    "6-圆": { grade: 6, deps: ["5-多边形面积"], desc: "圆的认识与计算" },
    "6-圆柱圆锥": { grade: 6, deps: ["5-体积", "6-圆"], desc: "立体图形进阶" },
    "6-负数": { grade: 6, deps: ["4-小数意义"], desc: "数系扩展" },
    "6-比例应用": { grade: 6, deps: ["6-比和比例"], desc: "正反比例" },
    "6-扇形统计图": { grade: 6, deps: ["6-百分数", "5-折线统计图"], desc: "统计图综合" },
    "6-数学广角": { grade: 6, deps: ["5-简易方程", "3-集合"], desc: "鸽巢原理等" }
};

let nodes = [];
let edges = [];
let mastered = new Set();
let sourceNode = null;
let targetNode = null;
let simulation, svg, g;
let reachabilityMatrix = null;
let nodeIndex = {};
let reverseIndex = {};

document.addEventListener('DOMContentLoaded', () => {
    initData();
    initGraph();
    initUI();
    computeReachabilityMatrix();
    updateStats();
});

// 辅助：安全读取边的端点 id（应对 D3 将 source/target 替换为节点对象的情况）
function getEdgeSourceId(e) {
    return (e && typeof e.source === 'object') ? e.source.id : e.source;
}

function getEdgeTargetId(e) {
    return (e && typeof e.target === 'object') ? e.target.id : e.target;
}

// 获取当前选中的年级
function getSelectedGrades() {
    const checkboxes = document.querySelectorAll('.grade-check:checked');
    const grades = Array.from(checkboxes).map(cb => parseInt(cb.value));
    // 确保至少选中一个年级，避免空数据
    if (grades.length > 0) return grades;
    // 默认返回 knowledgeData 中存在的所有年级
    const allGrades = Array.from(new Set(Object.values(knowledgeData).map(d => d.grade))).sort((a, b) => a - b);
    return allGrades;
}

function initData() {
    const selectedGrades = getSelectedGrades();

    nodes = Object.entries(knowledgeData).map(([id, data]) => ({
        id,
        name: id.split('-')[1],
        fullName: id,
        grade: data.grade,
        desc: data.desc,
        deps: data.deps
    }));

    // 根据选中的年级筛选知识点
    nodes = nodes.filter(n => selectedGrades.includes(n.grade));

    // 仅生成在当前节点集合内的边（避免引用已移除的前置点）
    const nodeSet = new Set(nodes.map(n => n.id));
    edges = [];
    nodes.forEach(node => {
        node.deps.forEach(depId => {
            if (nodeSet.has(depId)) {
                edges.push({ source: depId, target: node.id, sourceId: depId, targetId: node.id });
            }
        });
    });

    document.getElementById('nodeCount').textContent = nodes.length;
    document.getElementById('edgeCount').textContent = edges.length;
}

// 年级筛选相关函数
function applyGradeFilter() {
    // 停止现有的力导向图模拟（防止卡死）
    if (simulation) {
        simulation.stop();
        simulation = null;
    }

    // 清除掌握状态中与筛选后无关的节点
    const currentNodeIds = new Set(Object.keys(knowledgeData).filter(id => {
        const grade = knowledgeData[id].grade;
        return getSelectedGrades().includes(grade);
    }));

    const toDelete = [];
    mastered.forEach(id => {
        if (!currentNodeIds.has(id)) {
            toDelete.push(id);
        }
    });
    toDelete.forEach(id => mastered.delete(id));

    // 重置节点选择
    sourceNode = null;
    targetNode = null;

    // 重新初始化数据和UI
    initData();
    initUI();
    computeReachabilityMatrix();
    updateStats();

    // 重新渲染图（不重新初始化SVG）
    renderGraph();

    // 重置UI控件
    document.getElementById('sourceSelect').value = '';
    document.getElementById('targetSelect').value = '';
    document.getElementById('queryResult').classList.add('hidden');
}

function selectAllGrades() {
    document.querySelectorAll('.grade-check').forEach(cb => cb.checked = true);
    applyGradeFilter();
}

function clearAllGrades() {
    document.querySelectorAll('.grade-check').forEach(cb => cb.checked = false);
    applyGradeFilter();
}

// 监听年级筛选变化
let resizeTimeout;
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.grade-check').forEach(cb => {
        cb.addEventListener('change', applyGradeFilter);
    });

    // 窗口大小改变时防抖重绘
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(handleResize, 300);
    });
});

// 移动端标签切换
function switchMobileTab(tab) {
    // 隐藏所有面板
    document.querySelectorAll('.mobile-tab-panel').forEach(panel => {
        panel.classList.add('hidden');
        panel.classList.remove('block');
    });

    // 显示选中面板
    const selectedPanel = document.getElementById('panel-' + tab);
    if (selectedPanel) {
        selectedPanel.classList.remove('hidden');
        selectedPanel.classList.add('block');
    }

    // 更新标签样式
    document.querySelectorAll('[id^="tab-"]').forEach(t => {
        t.classList.remove('text-indigo-400', 'border-indigo-500', 'bg-slate-800/50');
        t.classList.add('text-slate-400', 'border-transparent');
    });

    const activeTab = document.getElementById('tab-' + tab);
    if (activeTab) {
        activeTab.classList.remove('text-slate-400', 'border-transparent');
        activeTab.classList.add('text-indigo-400', 'border-indigo-500', 'bg-slate-800/50');
    }
}

function computeReachabilityMatrix() {
    const n = nodes.length;
    nodeIndex = {};
    reverseIndex = {};
    nodes.forEach((node, i) => {
        nodeIndex[node.id] = i;
        reverseIndex[i] = node.id;
    });

    // 初始化邻接矩阵
    let R = Array(n).fill(null).map(() => Array(n).fill(0));

    // 填充直接边（使用安全的 id 读取）
    edges.forEach(e => {
        const i = nodeIndex[getEdgeSourceId(e)];
        const j = nodeIndex[getEdgeTargetId(e)];
        if (i !== undefined && j !== undefined) R[i][j] = 1;
    });

    // 自反性
    for (let i = 0; i < n; i++) R[i][i] = 1;

    // Warshall算法计算传递闭包
    for (let k = 0; k < n; k++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                R[i][j] = R[i][j] || (R[i][k] && R[k][j]);
            }
        }
    }

    reachabilityMatrix = R;
    renderMatrix();
    return R;
}

function renderMatrix() {
    if (!reachabilityMatrix) return;

    const container = document.getElementById('matrixContainer');
    const n = nodes.length;
    const cellSize = Math.max(30, Math.min(40, 400 / n));

    // 排序：按年级，然后按名称
    const sortedNodes = [...nodes].sort((a, b) => {
        if (a.grade !== b.grade) return a.grade - b.grade;
        return a.name.localeCompare(b.name);
    });

    // 创建映射
    const displayIndex = {};
    sortedNodes.forEach((node, i) => {
        displayIndex[node.id] = i;
    });

    let html = `<div class="inline-block"><table class="border-collapse">`;

    // 表头
    html += `<tr><th class="p-1"></th>`;
    sortedNodes.forEach(node => {
        const gradeColors = ['text-yellow-400', 'text-blue-400', 'text-green-400', 'text-purple-400', 'text-pink-400', 'text-red-400'];
        const color = gradeColors[node.grade - 1] || 'text-slate-400';
        html += `<th class="p-1 text-[10px] ${color} font-medium" style="width:${cellSize}px" title="${node.fullName}">${node.name}</th>`;
    });
    html += `</tr>`;

    // 表格内容
    const gradeColors = ['text-yellow-400', 'text-blue-400', 'text-green-400', 'text-purple-400', 'text-pink-400', 'text-red-400'];
    sortedNodes.forEach((rowNode, i) => {
        const rowColor = gradeColors[rowNode.grade - 1] || 'text-slate-400';

        html += `<tr><td class="p-1 text-[10px] ${rowColor} font-medium text-right pr-2" title="${rowNode.fullName}">${rowNode.name}</td>`;

        sortedNodes.forEach((colNode, j) => {
            const origI = nodeIndex[rowNode.id];
            const origJ = nodeIndex[colNode.id];
            const val = reachabilityMatrix[origI][origJ];

            let bgClass = 'bg-slate-800';
            let textClass = 'text-slate-600';

            if (val) {
                if (i === j) {
                    bgClass = 'bg-slate-600';
                    textClass = 'text-white';
                } else if (mastered.has(rowNode.id) && mastered.has(colNode.id)) {
                    bgClass = 'bg-emerald-500/40';
                    textClass = 'text-emerald-200';
                } else if (rowNode.id === sourceNode && colNode.id === targetNode) {
                    bgClass = 'bg-pink-500/50';
                    textClass = 'text-pink-200';
                } else if (rowNode.id === sourceNode) {
                    bgClass = 'bg-blue-500/30';
                    textClass = 'text-blue-200';
                } else if (colNode.id === targetNode) {
                    bgClass = 'bg-pink-500/30';
                    textClass = 'text-pink-200';
                } else {
                    bgClass = 'bg-indigo-500/20';
                    textClass = 'text-indigo-200';
                }
            }

            html += `<td class="matrix-cell ${bgClass} ${textClass} border border-slate-800 text-center text-xs" 
                               style="width:${cellSize}px;height:${cellSize}px"
                               onclick="highlightCell('${rowNode.id}', '${colNode.id}', ${val})"
                               title="${rowNode.name} → ${colNode.name}: ${val ? '可达' : '不可达'}">
                               ${val ? (i === j ? '●' : '1') : '0'}
                           </td>`;
        });
        html += `</tr>`;
    });

    html += `</table></div>`;
    container.innerHTML = html;
}

function highlightCell(from, to, reachable) {
    // 高亮显示特定单元格的信息
    const fromNode = nodes.find(n => n.id === from);
    const toNode = nodes.find(n => n.id === to);

    let message = `${fromNode.name} → ${toNode.name}: ${reachable ? '可达' : '不可达'}`;
    if (reachable && from !== to) {
        const path = findPath(from, to);
        if (path) {
            message += `\n路径: ${path.map(id => nodes.find(n => n.id === id).name).join(' → ')}`;
        }
    }
    alert(message);
}

function initGraph() {
    // 清理已存在的SVG（防止重复创建）
    d3.select('#graphContainer').selectAll('svg').remove();

    const container = document.getElementById('graphContainer');
    const width = container.clientWidth;
    const height = container.clientHeight;

    svg = d3.select('#graphContainer')
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .attr('viewBox', [0, 0, width, height]);

    const defs = svg.append('defs');

    ['arrowhead', 'arrowhead-path', 'arrowhead-reachable'].forEach((id, i) => {
        const colors = ['#64748b', '#ec4899', '#10b981'];
        defs.append('marker')
            .attr('id', id)
            .attr('viewBox', '0 -5 10 10')
            .attr('refX', 25)
            .attr('refY', 0)
            .attr('markerWidth', 6)
            .attr('markerHeight', 6)
            .attr('orient', 'auto')
            .append('path')
            .attr('d', 'M0,-5L10,0L0,5')
            .attr('fill', colors[i]);
    });

    g = svg.append('g');

    const zoom = d3.zoom()
        .scaleExtent([0.3, 2])
        .on('zoom', (event) => {
            g.attr('transform', event.transform);
        });

    svg.call(zoom);
    renderGraph();
}

// 窗口大小改变时重新渲染
function handleResize() {
    if (simulation) {
        simulation.stop();
    }
    initGraph();
    renderGraph();
}

function renderGraph() {
    // 如果没有SVG，先初始化
    if (!svg || !g) {
        initGraph();
        return;
    }

    // 停止旧的模拟
    if (simulation) {
        simulation.stop();
        simulation = null;
    }

    // 清空画布
    g.selectAll('*').remove();

    // 如果没有节点，显示提示
    if (nodes.length === 0) {
        g.append('text')
            .attr('x', '50%')
            .attr('y', '50%')
            .attr('text-anchor', 'middle')
            .attr('fill', '#64748b')
            .attr('font-size', '14px')
            .text('请至少选择一个年级');
        return;
    }

    const width = document.getElementById('graphContainer').clientWidth;
    const height = document.getElementById('graphContainer').clientHeight;

    // 计算状态
    const status = {};
    nodes.forEach(node => {
        if (mastered.has(node.id)) {
            status[node.id] = 'mastered';
        } else {
            const prereqs = edges.filter(e => getEdgeTargetId(e) === node.id).map(e => getEdgeSourceId(e));
            if (prereqs.every(p => mastered.has(p))) {
                status[node.id] = 'ready';
            } else {
                status[node.id] = 'blocked';
            }
        }
    });

    // 力导向布局 - 根据节点数量调整参数
    const linkDistance = nodes.length > 40 ? 80 : 100;
    const chargeStrength = nodes.length > 40 ? -200 : -300;
    const collisionRadius = nodes.length > 40 ? 40 : 50;

    simulation = d3.forceSimulation(nodes)
        .force('link', d3.forceLink(edges).id(d => d.id).distance(linkDistance))
        .force('charge', d3.forceManyBody().strength(chargeStrength))
        .force('center', d3.forceCenter(width / 2, height / 2))
        .force('y', d3.forceY(d => height / 2 + (3.5 - d.grade) * (height / 8)).strength(0.3))
        .force('collision', d3.forceCollide().radius(collisionRadius));

    // 绘制边
    const link = g.append('g')
        .selectAll('line')
        .data(edges)
        .enter().append('line')
        .attr('class', d => {
            try {
                const sId = getEdgeSourceId(d);
                const tId = getEdgeTargetId(d);

                if (sourceNode && targetNode) {
                    const path = findPath(sourceNode, targetNode) || [];
                    if (path.includes(sId) && path.includes(tId)) {
                        if (path.indexOf(sId) === path.indexOf(tId) - 1) {
                            return 'link link-path';
                        }
                    }
                }

                const srcIdx = sourceNode && nodeIndex[sourceNode] !== undefined ? nodeIndex[sourceNode] : null;
                const tgtIdx = nodeIndex[tId];
                if (srcIdx !== null && tgtIdx !== undefined && reachabilityMatrix && reachabilityMatrix[srcIdx]) {
                    if (reachabilityMatrix[srcIdx][tgtIdx]) return 'link link-reachable';
                }
            } catch (e) {
                console.warn('link class compute error', e);
            }
            return 'link';
        })
        .attr('marker-end', d => {
            try {
                const sId = getEdgeSourceId(d);
                const tId = getEdgeTargetId(d);

                if (sourceNode && targetNode) {
                    const path = findPath(sourceNode, targetNode) || [];
                    if (path.includes(sId) && path.includes(tId)) {
                        if (path.indexOf(sId) === path.indexOf(tId) - 1) {
                            return 'url(#arrowhead-path)';
                        }
                    }
                }

                const srcIdx = sourceNode && nodeIndex[sourceNode] !== undefined ? nodeIndex[sourceNode] : null;
                const tgtIdx = nodeIndex[tId];
                if (srcIdx !== null && tgtIdx !== undefined && reachabilityMatrix && reachabilityMatrix[srcIdx]) {
                    if (reachabilityMatrix[srcIdx][tgtIdx]) return 'url(#arrowhead-reachable)';
                }
            } catch (e) {
                console.warn('marker-end compute error', e);
            }
            return 'url(#arrowhead)';
        });

    // 绘制节点
    const node = g.append('g')
        .selectAll('g')
        .data(nodes)
        .enter().append('g')
        .call(d3.drag()
            .on('start', dragstarted)
            .on('drag', dragged)
            .on('end', dragended))
        .on('click', (event, d) => {
            if (event.shiftKey) {
                toggleMastered(d.id);
            }
        });

    // 节点圆圈
    node.append('circle')
        .attr('r', d => {
            if (d.id === sourceNode) return 22;
            if (d.id === targetNode) return 22;
            return 18;
        })
        .attr('class', d => {
            if (d.id === sourceNode) return 'node-source';
            if (d.id === targetNode) return 'node-target';
            return `node-${status[d.id]}`;
        });

    // 年级标签
    node.append('text')
        .attr('x', d => d.id === sourceNode || d.id === targetNode ? 26 : 22)
        .attr('y', -12)
        .text(d => d.grade)
        .attr('font-size', '10px')
        .attr('font-weight', 'bold')
        .attr('fill', d => {
            const colors = ['#fbbf24', '#60a5fa', '#34d399'];
            return colors[d.grade - 1];
        });

    // 节点名称
    node.append('text')
        .text(d => d.name)
        .attr('text-anchor', 'middle')
        .attr('dy', 32)
        .attr('fill', '#e2e8f0')
        .attr('font-size', '12px')
        .attr('font-weight', '500');

    // 标题
    node.append('title')
        .text(d => `${d.fullName}\n${d.desc}\n年级: ${d.grade}\n状态: ${getStatusText(status[d.id])}`);

    simulation.on('tick', () => {
        link
            .attr('x1', d => d.source.x)
            .attr('y1', d => d.source.y)
            .attr('x2', d => d.target.x)
            .attr('y2', d => d.target.y);

        node.attr('transform', d => `translate(${d.x},${d.y})`);
    });
}

function getStatusText(status) {
    const map = { mastered: '已掌握', ready: '就绪可学', blocked: '前置不足' };
    return map[status] || '未知';
}

function initUI() {
    const options = nodes.map(n => `<option value="${n.id}">${n.grade}年级 - ${n.name} (${n.desc})</option>`).join('');
    document.getElementById('sourceSelect').innerHTML = '<option value="">选择起点...</option>' + options;
    document.getElementById('targetSelect').innerHTML = '<option value="">选择终点...</option>' + options;

    // 多源列表
    const multiList = document.getElementById('multiSourceList');
    multiList.innerHTML = nodes.map(n => `
        <label class="flex items-center gap-2 p-2 hover:bg-slate-800 rounded cursor-pointer">
            <input type="checkbox" value="${n.id}" class="multi-source-check rounded border-slate-600 bg-slate-800 text-emerald-500 focus:ring-emerald-500">
            <span class="text-sm text-slate-300">${n.grade}年级 - ${n.name}</span>
        </label>
    `).join('');
}

function updateReachabilityAnalysis() {
    sourceNode = document.getElementById('sourceSelect').value;
    targetNode = document.getElementById('targetSelect').value;

    renderGraph();

    if (sourceNode && targetNode) {
        calculatePath();
    }
}

function calculatePath() {
    if (!sourceNode || !targetNode) {
        alert('请选择起点和终点');
        return;
    }

    const sourceIdx = nodeIndex[sourceNode];
    const targetIdx = nodeIndex[targetNode];
    const isReachable = reachabilityMatrix[sourceIdx][targetIdx];

    const resultDiv = document.getElementById('queryResult');
    const statusSpan = document.getElementById('reachabilityStatus');
    const detailsDiv = document.getElementById('pathDetails');

    resultDiv.classList.remove('hidden');

    if (isReachable) {
        statusSpan.textContent = '可达';
        statusSpan.className = 'px-2 py-1 rounded text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/50';

        const path = findPath(sourceNode, targetNode);
        const pathNames = path.map(id => nodes.find(n => n.id === id).name);

        detailsDiv.innerHTML = `
            <div class="space-y-2">
                <div class="text-xs text-slate-400">最短路径（${path.length}步）:</div>
                <div class="flex flex-wrap items-center gap-1 text-sm">
                    ${pathNames.map((name, i) => `
                        <span class="px-2 py-1 bg-slate-700 rounded text-slate-200">${name}</span>
                        ${i < pathNames.length - 1 ? '<span class="text-pink-400">→</span>' : ''}
                    `).join('')}
                </div>
                <div class="mt-3 pt-3 border-t border-slate-700 text-xs text-slate-400">
                    <div>矩阵值 R[${sourceIdx}][${targetIdx}] = 1</div>
                    <div>传递闭包确认存在路径</div>
                </div>
            </div>
        `;
    } else {
        statusSpan.textContent = '不可达';
        statusSpan.className = 'px-2 py-1 rounded text-xs font-bold bg-red-500/20 text-red-400 border border-red-500/50';

        detailsDiv.innerHTML = `
            <div class="text-sm text-slate-300">
                <p>从"${nodes.find(n => n.id === sourceNode).name}"无法到达"${nodes.find(n => n.id === targetNode).name}"</p>
                <p class="mt-2 text-xs text-slate-500">需要补充前置知识或检查依赖关系</p>
            </div>
        `;
    }

    renderMatrix(); // 更新矩阵高亮
}

function findPath(start, end) {
    // BFS找最短路径
    const queue = [[start]];
    const visited = new Set();

    while (queue.length > 0) {
        const path = queue.shift();
        const current = path[path.length - 1];

        if (current === end) return path;

        if (!visited.has(current)) {
            visited.add(current);
            const neighbors = edges.filter(e => getEdgeSourceId(e) === current).map(e => getEdgeTargetId(e));
            neighbors.forEach(neighbor => {
                if (!visited.has(neighbor)) {
                    queue.push([...path, neighbor]);
                }
            });
        }
    }
    return null;
}

function analyzeMultiSource() {
    const checked = document.querySelectorAll('.multi-source-check:checked');
    const sources = Array.from(checked).map(cb => cb.value);

    if (sources.length === 0) {
        alert('请至少选择一个知识点');
        return;
    }

    // 计算联合可达性（并集）
    const n = nodes.length;
    const reachable = new Set();

    sources.forEach(sourceId => {
        const idx = nodeIndex[sourceId];
        if (idx === undefined) return;
        for (let j = 0; j < n; j++) {
            if (reachabilityMatrix && reachabilityMatrix[idx] && reachabilityMatrix[idx][j]) {
                reachable.add(reverseIndex[j]);
            }
        }
    });

    // 去除已选择的源，得到联合可达的新知识点集合
    const extendedReachable = new Set(Array.from(reachable).filter(id => !sources.includes(id)));

    const resultDiv = document.getElementById('multiSourceResult');
    resultDiv.classList.remove('hidden');

    const sourceNames = sources.map(id => nodes.find(n => n.id === id).name);

    resultDiv.innerHTML = `
        <div class="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-4">
            <h3 class="font-bold text-emerald-400 mb-3">联合可达分析</h3>
            <div class="text-xs text-slate-400 mb-2">选中的知识源:</div>
            <div class="flex flex-wrap gap-1 mb-4">
                ${sourceNames.map(name => `<span class="px-2 py-1 bg-emerald-500/20 text-emerald-300 rounded text-xs">${name}</span>`).join('')}
            </div>
            
            <div class="space-y-3">
                <div>
                    <div class="text-xs text-slate-400 mb-1">联合解锁新领域:</div>
                    <div class="text-2xl font-bold text-white">${extendedReachable.size} <span class="text-sm font-normal text-slate-400">个知识点</span></div>
                </div>
                
                ${extendedReachable.size > 0 ? `
                    <div class="max-h-32 overflow-y-auto space-y-1">
                        ${Array.from(extendedReachable).map(id => {
        const node = nodes.find(n => n.id === id);
        return `<div class="text-xs p-2 bg-slate-800 rounded flex justify-between">
                                        <span>${node.name}</span>
                                        <span class="text-slate-500">${node.grade}年级</span>
                                    </div>`;
    }).join('')}
                    </div>
                ` : ''}
            </div>
        </div>
    `;

    // 高亮显示
    sources.forEach(id => mastered.add(id));
    updateStats();
    renderGraph();
}

function simulateMastered(type) {
    mastered.clear();

    if (type === '1年级') {
        nodes.filter(n => n.grade === 1).forEach(n => mastered.add(n.id));
    } else if (type === '2年级') {
        nodes.filter(n => n.grade <= 2).forEach(n => mastered.add(n.id));
    } else if (type === '3年级') {
        nodes.filter(n => n.grade <= 3).forEach(n => mastered.add(n.id));
    } else if (type === '4年级') {
        nodes.filter(n => n.grade <= 4).forEach(n => mastered.add(n.id));
    } else if (type === '5年级') {
        nodes.filter(n => n.grade <= 5).forEach(n => mastered.add(n.id));
    } else if (type === '6年级') {
        nodes.filter(n => n.grade <= 6).forEach(n => mastered.add(n.id));
    } else if (type === '基础') {
        nodes.filter(n => n.deps.length === 0).forEach(n => mastered.add(n.id));
    }

    updateStats();
    renderGraph();
    computeReachabilityMatrix(); // 重新计算矩阵视角
}

function clearMastered() {
    mastered.clear();
    updateStats();
    renderGraph();
    computeReachabilityMatrix();
}

function toggleMastered(id) {
    if (mastered.has(id)) {
        mastered.delete(id);
    } else {
        mastered.add(id);
    }
    updateStats();
    renderGraph();
    computeReachabilityMatrix();
}

function updateStats() {
    const ready = nodes.filter(n => {
        if (mastered.has(n.id)) return false;
        const prereqs = edges.filter(e => getEdgeTargetId(e) === n.id).map(e => getEdgeSourceId(e));
        return prereqs.every(p => mastered.has(p));
    }).length;

    document.getElementById('masteredCount').textContent = mastered.size;
    document.getElementById('readyCount').textContent = ready;
}

function exportMatrix() {
    if (!reachabilityMatrix) return;

    const grades = getSelectedGrades().slice().sort((a, b) => a - b);
    const gradeLabel = (grades.length === 0)
        ? '全部'
        : (grades.length === (Math.max(...grades) - Math.min(...grades) + 1)
            ? `${grades[0]}-${grades[grades.length - 1]}年级`
            : grades.join('-') + '年级');

    let csv = '知识点,' + nodes.map(n => n.name).join(',') + '\n';
    nodes.forEach((node, i) => {
        csv += node.name + ',' + reachabilityMatrix[i].join(',') + '\n';
    });

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `小学数学可达矩阵_${gradeLabel}.csv`;
    link.click();
}

function toggleMatrixView() {
    // 切换矩阵显示模式（完整/紧凑）
    renderMatrix();
}

function resetAll() {
    sourceNode = null;
    targetNode = null;
    mastered.clear();
    document.getElementById('sourceSelect').value = '';
    document.getElementById('targetSelect').value = '';
    document.getElementById('queryResult').classList.add('hidden');
    document.getElementById('multiSourceResult').classList.add('hidden');
    document.querySelectorAll('.multi-source-check').forEach(cb => cb.checked = false);
    updateStats();
    renderGraph();
    computeReachabilityMatrix();
}

function dragstarted(event, d) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
}

function dragged(event, d) {
    d.fx = event.x;
    d.fy = event.y;
}

function dragended(event, d) {
    if (!event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
}
