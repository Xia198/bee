/**
 * 九种蜜蜂属图鉴 - 主脚本
 * Nine Bees Gallery - Main JavaScript
 */

// 九种蜜蜂属数据
const beesData = [
    {
        id: 1,
        chineseName: '黑大蜜蜂',
        latinName: 'Apis laboriosa',
        preview: '世界体型最大的蜜蜂，生活在高海拔地区。',
        distribution: '喜马拉雅山脉地区，包括中国西南、印度、尼泊尔等地',
        habitat: '海拔1000-3000米的高山峡谷',
        features: [
            '体长可达17-20mm',
            '工蜂体色为黑色',
            '腹部有橙色斑块',
            '翅展宽大',
            '覆毛浓密，能适应低温'
        ],
        behavior: '黑大蜜蜂是世界上体型最大的蜜蜂品种，生活在喜马拉雅山区的高海拔地带。它们的蜂巢巨大，常悬挂在悬崖峭壁或高大树木上。每年只采蜜一次，蜂蜜产量有限但品质极高。',
        funFact: '黑大蜜蜂生活在海拔3000米的高山上，它们能承受接近冰点的温度！',
        status: '易危（VU）'
    },
    {
        id: 2,
        chineseName: '大蜜蜂',
        latinName: 'Apis dorsata',
        preview: '体型最大的蜜蜂之一，单脾群居，蜂巢常悬挂在树枝或岩石下。',
        distribution: '南亚、东南亚的热带和亚热带地区',
        habitat: '热带雨林边缘，高海拔地区也有分布',
        features: [
            '体长可达17-20mm',
            '工蜂体色为黑色',
            '腹部有鲜艳的橙黄色条纹',
            '覆毛浓密',
            '巨翼发达'
        ],
        behavior: '大蜜蜂采用单脾垂直悬挂的方式筑巢，蜂巢常暴露在外，可长达1米以上。攻击性强，护巢能力出众。每年会进行大规模迁飞。',
        funFact: '大蜜蜂的蜂巢可以长到2米长，里面能容纳超过10万只蜜蜂！',
        status: '数据缺乏（DD）'
    },
    {
        id: 3,
        chineseName: '沙巴蜜蜂',
        latinName: 'Apis koschevnikovi',
        preview: '马来西亚沙巴州的特有蜜蜂，较为稀有神秘。',
        distribution: '马来西亚沙巴州、婆罗洲热带雨林',
        habitat: '原始热带雨林',
        features: [
            '体长约11-13mm',
            '体色深棕至黑色',
            '腹部条纹细密',
            '后翅腋脉特征明显',
            '复眼结构独特'
        ],
        behavior: '沙巴蜜蜂是婆罗洲热带雨林中的特有物种，生态习性与东方蜜蜂相似但有独特之处。由于栖息地受到砍伐和农业扩张的威胁，野生种群数量正在减少。',
        funFact: '沙巴蜜蜂是马来西亚沙巴州的骄傲，这种蜜蜂只在这片热带雨林中生活！',
        status: '易危（VU）'
    },
    {
        id: 4,
        chineseName: '西方蜜蜂',
        latinName: 'Apis mellifera',
        preview: '全球分布最广的蜜蜂种类，也是养蜂业最重要的蜂种。',
        distribution: '原产于欧洲、非洲和中东，现已分布至全球各地',
        habitat: '温带至亚热带地区，适应性强',
        features: [
            '体长12-15mm',
            '体色变化大，从浅黄到深褐',
            '腹部有明显的黄色条纹',
            '后翅有腋脉',
            '工蜂的螫刺有倒刺'
        ],
        behavior: '西方蜜蜂是社会性昆虫，一个蜂群可包含数万只个体。它们以舞蹈语言进行信息交流，能通过圆舞表示近距离蜜源，摆尾舞表示远距离蜜源。是重要的授粉昆虫和蜂蜜生产者。',
        funFact: '西方蜜蜂能在一秒内扇动翅膀200多次，最高飞行速度可达每小时24公里！',
        status: '无危（LC）'
    },
    {
        id: 5,
        chineseName: '绿奴蜂',
        latinName: 'Apis nigrocincta',
        preview: '菲律宾群岛的特有蜜蜂种类。',
        distribution: '菲律宾群岛、苏拉威西岛等东南亚地区',
        habitat: '热带雨林、山地森林',
        features: [
            '体长约11-13mm',
            '体色呈深棕色',
            '腹部有淡黄色条纹',
            '后翅腋脉特征',
            '复眼较大'
        ],
        behavior: '绿奴蜂是东南亚热带地区的特有物种，对当地生态系统具有重要意义。它们与其他授粉昆虫共同维持着热带植物的繁殖。',
        funFact: '绿奴蜂以菲律宾群岛命名，是当地重要的授粉昆虫！',
        status: '易危（VU）'
    },
    {
        id: 6,
        chineseName: '苏拉威西蜂',
        latinName: 'Apis nuluensis',
        preview: '印度尼西亚苏拉威西岛的特有蜜蜂。',
        distribution: '印度尼西亚苏拉威西岛及周边岛屿',
        habitat: '热带雨林、山地森林',
        features: [
            '体长约10-12mm',
            '体色深棕至黑色',
            '腹部条纹细密',
            '后翅腋脉特征明显',
            '体型较小'
        ],
        behavior: '苏拉威西蜂是苏拉威西岛的特有物种，对当地植物授粉具有重要作用。',
        funFact: '苏拉威西蜂以印尼苏拉威西岛命名，是世界上最稀有的蜜蜂之一！',
        status: '易危（VU）'
    },
    {
        id: 7,
        chineseName: '东方蜜蜂',
        latinName: 'Apis cerana',
        preview: '亚洲本土的蜜蜂，野性强，善于采集野生植物花蜜。',
        distribution: '东亚、南亚、东南亚，包括中国、日本、朝鲜等地',
        habitat: '山地、丘陵、平原均有分布',
        features: [
            '体长10-13mm',
            '体色以黑色为主',
            '腹部有细小的灰黄色绒毛带',
            '较西方蜜蜂体型小',
            '飞行敏捷'
        ],
        behavior: '东方蜜蜂对亚洲气候和蜜源植物适应性强，抗螨能力强于西方蜜蜂，但产蜜量较低。野性较强，不易被人工饲养。能有效利用零星蜜源。',
        funFact: '东方蜜蜂是中国本土的重要授粉昆虫，已有数千年的饲养历史！',
        status: '无危（LC）'
    },
    {
        id: 8,
        chineseName: '小蜜蜂',
        latinName: 'Apis florea',
        preview: '体型最小的蜜蜂之一，蜂巢小而精致，常建于低矮植物上。',
        distribution: '南亚、东南亚的热带地区',
        habitat: '热带低地、灌木丛、果园',
        features: [
            '体长仅8-10mm',
            '体色鲜艳，腹部橙红色',
            '工蜂体毛较短',
            '单脾水平悬挂筑巢',
            '蜂巢较小'
        ],
        behavior: '小蜜蜂的蜂巢结构精美，巢脾水平生长，蜂王产卵区在巢脾中央。小蜜蜂性情温和，较少主动攻击人。由于体型小，它们能进入其他蜜蜂无法进入的小花。',
        funFact: '小蜜蜂的蜂巢直径通常只有20-30厘米，是世界上最小的蜜蜂巢穴之一！',
        status: '易危（VU）'
    },
    {
        id: 9,
        chineseName: '黑小蜜蜂',
        latinName: 'Apis andreniformis',
        preview: '体型最小的蜜蜂种类之一，通体呈黑色，较为罕见。',
        distribution: '东南亚的热带雨林地区',
        habitat: '原始热带雨林、低地森林',
        features: [
            '体长仅7-8mm',
            '全身呈深黑色',
            '腹部黑色，无明显黄色条纹',
            '体毛浓密呈灰色',
            '体型略扁'
        ],
        behavior: '黑小蜜蜂是最不为人知的蜜蜂种类之一，关于它们的研究较少。蜂巢小型，通常建于灌木或岩石下方。野生数量稀少，已被列为濒危物种。',
        funFact: '黑小蜜蜂直到1985年才被正式确认为独立物种，是最后被发现的大型蜜蜂之一！',
        status: '濒危（EN）'
    }
];

// 九种蜜蜂对应的图片
// 支持多种图片格式: jpg, avif, webp, png
const beeImages = [
    'images/bee1.jpg',      // 黑大蜜蜂
    'images/bee2.jpg',      // 大蜜蜂
    'images/bee3.jpg',      // 沙巴蜜蜂
    'images/bee4.webp',     // 西方蜜蜂
    'images/bee5.avif',     // 绿奴蜂
    'images/bee6.webp',     // 苏拉威西蜂
    'images/bee7.jpg',      // 东方蜜蜂
    'images/bee8.webp',     // 小蜜蜂
    'images/bee9.webp'      // 黑小蜜蜂
];

// DOM 元素
const beeGrid = document.getElementById('beeGrid');
const beeModal = document.getElementById('beeModal');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const modalBody = document.getElementById('modalBody');

// 初始化页面
document.addEventListener('DOMContentLoaded', () => {
    renderBeeCards();
    setupModalEvents();
    initBeeCursor();
    initFlowerEffect();
});

// ========================================
// 蜜蜂跟随效果（鼠标旁边）
// ========================================
function initBeeCursor() {
    // 创建蜜蜂跟随元素
    const beeFollower = document.createElement('div');
    beeFollower.id = 'bee-follower';
    beeFollower.innerHTML = `
        <svg viewBox="0 0 60 60" width="35" height="35">
            <!-- 翅膀 -->
            <ellipse class="wing" cx="16" cy="22" rx="14" ry="10" fill="#E8E8E8" opacity="0.8" transform="rotate(-35 16 22)"/>
            <ellipse class="wing" cx="44" cy="22" rx="14" ry="10" fill="#E8E8E8" opacity="0.8" transform="rotate(35 44 22)"/>
            <ellipse class="wing" cx="14" cy="32" rx="12" ry="8" fill="#E8E8E8" opacity="0.6" transform="rotate(-45 14 32)"/>
            <ellipse class="wing" cx="46" cy="32" rx="12" ry="8" fill="#E8E8E8" opacity="0.6" transform="rotate(45 46 32)"/>
            <!-- 身体 -->
            <ellipse cx="30" cy="35" rx="15" ry="18" fill="#F4A020"/>
            <rect x="15" y="28" width="30" height="5" fill="#2D2D2D"/>
            <rect x="15" y="38" width="30" height="5" fill="#2D2D2D"/>
            <!-- 头部 -->
            <circle cx="30" cy="16" r="12" fill="#2D2D2D"/>
            <!-- 眼睛 -->
            <circle cx="25" cy="14" r="4" fill="white"/>
            <circle cx="35" cy="14" r="4" fill="white"/>
            <circle cx="26" cy="14" r="2" fill="#2D2D2D"/>
            <circle cx="36" cy="14" r="2" fill="#2D2D2D"/>
            <!-- 触角 -->
            <path d="M23 6 Q20 0 16 -2" stroke="#2D2D2D" stroke-width="2" fill="none" stroke-linecap="round"/>
            <path d="M37 6 Q40 0 44 -2" stroke="#2D2D2D" stroke-width="2" fill="none" stroke-linecap="round"/>
            <!-- 小腿 -->
            <path d="M18 50 Q12 55 8 58" stroke="#2D2D2D" stroke-width="2" fill="none"/>
            <path d="M30 52 Q30 58 27 62" stroke="#2D2D2D" stroke-width="2" fill="none"/>
            <path d="M42 50 Q48 55 52 58" stroke="#2D2D2D" stroke-width="2" fill="none"/>
        </svg>
    `;
    document.body.appendChild(beeFollower);

    let mouseX = 0, mouseY = 0;
    let beeX = 0, beeY = 0;
    let time = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // 平滑跟随动画，带有上下摆动
    function updateBee() {
        time += 0.08;
        beeX += (mouseX - beeX) * 0.12;
        beeY += (mouseY - beeY) * 0.12;

        // 添加轻微的上下浮动
        const wobble = Math.sin(time) * 3;
        const offsetX = 25; // 蜜蜂在鼠标右侧
        const offsetY = -5 + wobble; // 稍微偏上

        beeFollower.style.left = (beeX + offsetX) + 'px';
        beeFollower.style.top = (beeY + offsetY) + 'px';

        requestAnimationFrame(updateBee);
    }
    updateBee();
}

// ========================================
// 点击碎花效果
// ========================================
function initFlowerEffect() {
    // 碎花SVG - 各种花瓣形状
    const petalSVGs = [
        // 粉色花瓣
        `<svg viewBox="0 0 20 20" width="20" height="20"><ellipse cx="10" cy="10" rx="6" ry="10" fill="#FFB6C1"/></svg>`,
        // 紫色花瓣
        `<svg viewBox="0 0 20 20" width="18" height="18"><ellipse cx="10" cy="10" rx="5" ry="9" fill="#DDA0DD"/></svg>`,
        // 黄色花瓣
        `<svg viewBox="0 0 20 20" width="16" height="16"><ellipse cx="10" cy="10" rx="6" ry="8" fill="#FFD700"/></svg>`,
        // 白色花瓣
        `<svg viewBox="0 0 20 20" width="14" height="14"><ellipse cx="10" cy="10" rx="5" ry="7" fill="#FFF0F5"/></svg>`,
        // 橙色花瓣
        `<svg viewBox="0 0 20 20" width="15" height="15"><ellipse cx="10" cy="10" rx="5" ry="8" fill="#FFA07A"/></svg>`,
        // 浅蓝色花瓣
        `<svg viewBox="0 0 20 20" width="12" height="12"><ellipse cx="10" cy="10" rx="4" ry="6" fill="#ADD8E6"/></svg>`,
    ];

    document.addEventListener('click', (e) => {
        // 不在弹窗内创建效果
        if (e.target.closest('.modal')) return;

        // 创建多个碎花向四周散开
        for (let i = 0; i < 8; i++) {
            const petal = document.createElement('div');
            petal.className = 'click-petal';
            petal.innerHTML = petalSVGs[Math.floor(Math.random() * petalSVGs.length)];

            // 随机散开方向
            const angle = (Math.PI * 2 / 8) * i + Math.random() * 0.5;
            const distance = 50 + Math.random() * 60;
            const tx = Math.cos(angle) * distance;
            const ty = Math.sin(angle) * distance - 30; // 稍微向上
            const rot = Math.random() * 720 - 360;

            petal.style.left = e.clientX + 'px';
            petal.style.top = e.clientY + 'px';
            petal.style.setProperty('--tx', tx + 'px');
            petal.style.setProperty('--ty', ty + 'px');
            petal.style.setProperty('--rot', rot + 'deg');

            document.body.appendChild(petal);

            setTimeout(() => {
                petal.remove();
            }, 1200);
        }
    });
}

// 渲染蜜蜂卡片
function renderBeeCards() {
    beeGrid.innerHTML = beesData.map((bee, index) => `
        <div class="bee-card" data-bee-id="${bee.id}">
            <div class="card-number">${bee.id}</div>
            <div class="card-image">
                <div class="image-placeholder">
                    <svg viewBox="0 0 100 100" width="100" height="100">
                        <ellipse cx="50" cy="55" rx="30" ry="35" fill="#F4A020" opacity="0.5"/>
                        <rect x="20" y="40" width="60" height="8" fill="#8B5A2B" opacity="0.4"/>
                        <rect x="20" y="60" width="60" height="8" fill="#8B5A2B" opacity="0.4"/>
                        <circle cx="50" cy="25" r="20" fill="#8B5A2B" opacity="0.4"/>
                        <ellipse cx="20" cy="40" rx="20" ry="12" fill="#E8E8E8" opacity="0.5" transform="rotate(-40 20 40)"/>
                        <ellipse cx="80" cy="40" rx="20" ry="12" fill="#E8E8E8" opacity="0.5" transform="rotate(40 80 40)"/>
                    </svg>
                </div>
                <img src="${beeImages[index]}" alt="${bee.chineseName}" loading="lazy" onerror="this.parentElement.classList.add('image-error')">
            </div>
            <div class="card-content">
                <h3 class="card-chinese-name">${bee.chineseName}</h3>
                <p class="card-latin-name">${bee.latinName}</p>
                <p class="card-preview">${bee.preview}</p>
                <div class="card-footer">
                    <span>点击查看详情</span>
                    <svg viewBox="0 0 24 24" width="18" height="18">
                        <path d="M9 6l6 6-6 6" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
        </div>
    `).join('');

    // 添加点击事件
    document.querySelectorAll('.bee-card').forEach(card => {
        card.addEventListener('click', () => {
            const beeId = parseInt(card.dataset.beeId);
            openModal(beeId);
        });
    });
}

// 打开弹窗
function openModal(beeId) {
    const bee = beesData.find(b => b.id === beeId);
    if (!bee) return;

    modalBody.innerHTML = `
        <div class="detail-header">
            <div class="detail-number">${bee.id}</div>
            <h2 class="detail-chinese-name">${bee.chineseName}</h2>
            <p class="detail-latin-name">${bee.latinName}</p>
        </div>
        
        <div class="detail-content-wrapper">
            <div class="detail-image-section">
                <div class="detail-image">
                    <div class="image-placeholder">
                        <svg viewBox="0 0 200 150" width="100%" height="100%">
                            <ellipse cx="100" cy="80" rx="50" ry="55" fill="#F4A020" opacity="0.5"/>
                            <rect x="50" y="55" width="100" height="12" fill="#8B5A2B" opacity="0.4"/>
                            <rect x="50" y="80" width="100" height="12" fill="#8B5A2B" opacity="0.4"/>
                            <circle cx="100" cy="35" r="28" fill="#8B5A2B" opacity="0.4"/>
                            <ellipse cx="40" cy="60" rx="30" ry="18" fill="#E8E8E8" opacity="0.5" transform="rotate(-40 40 60)"/>
                            <ellipse cx="160" cy="60" rx="30" ry="18" fill="#E8E8E8" opacity="0.5" transform="rotate(40 160 60)"/>
                            <ellipse cx="40" cy="85" rx="30" ry="18" fill="#E8E8E8" opacity="0.4" transform="rotate(-50 40 85)"/>
                            <ellipse cx="160" cy="85" rx="30" ry="18" fill="#E8E8E8" opacity="0.4" transform="rotate(50 160 85)"/>
                        </svg>
                    </div>
                    <img src="${beeImages[bee.id - 1]}" alt="${bee.chineseName}" onerror="this.parentElement.classList.add('image-error')">
                </div>
                <div class="detail-tags">
                    <span class="detail-tag">
                        <svg viewBox="0 0 24 24" width="16" height="16">
                            <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" fill="none" stroke="currentColor" stroke-width="2"/>
                            <circle cx="12" cy="10" r="3" fill="none" stroke="currentColor" stroke-width="2"/>
                        </svg>
                        ${bee.habitat}
                    </span>
                    <span class="detail-tag status-tag">
                        <svg viewBox="0 0 24 24" width="16" height="16">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="none" stroke="currentColor" stroke-width="2"/>
                            <path d="M12 6v6l4 2" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/>
                        </svg>
                        ${bee.status}
                    </span>
                </div>
            </div>
            
            <div class="detail-info-section">
                <div class="detail-section">
                    <h3 class="detail-section-title">
                        <svg viewBox="0 0 24 24" width="18" height="18">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" fill="none"/>
                            <path d="M12 6v6l4 2" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/>
                        </svg>
                        分布区域
                    </h3>
                    <p class="detail-section-content">${bee.distribution}</p>
                </div>
                
                <div class="detail-section">
                    <h3 class="detail-section-title">
                        <svg viewBox="0 0 24 24" width="18" height="18">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        形态特征
                    </h3>
                    <ul class="detail-section-content">
                        ${bee.features.map(f => `<li>${f}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="detail-section">
                    <h3 class="detail-section-title">
                        <svg viewBox="0 0 24 24" width="18" height="18">
                            <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" fill="none" stroke="currentColor" stroke-width="2"/>
                            <path d="M12 6v6l4 2" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/>
                        </svg>
                        生态习性
                    </h3>
                    <p class="detail-section-content">${bee.behavior}</p>
                </div>
                
                <div class="detail-section fun-fact-section">
                    <h3 class="detail-section-title">
                        <svg viewBox="0 0 24 24" width="18" height="18">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        趣味小知识
                    </h3>
                    <p class="detail-section-content">${bee.funFact}</p>
                </div>
            </div>
        </div>
    `;

    beeModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// 关闭弹窗
function closeModal() {
    beeModal.classList.remove('active');
    document.body.style.overflow = '';
}

// 设置弹窗事件
function setupModalEvents() {
    // 点击遮罩关闭
    modalOverlay.addEventListener('click', closeModal);
    
    // 点击关闭按钮
    modalClose.addEventListener('click', closeModal);
    
    // ESC 键关闭
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && beeModal.classList.contains('active')) {
            closeModal();
        }
    });
    
    // 点击弹窗外部区域不关闭（阻止冒泡）
    document.querySelector('.modal-content').addEventListener('click', (e) => {
        e.stopPropagation();
    });
}

// 添加平滑滚动到内容区域
document.querySelector('.scroll-indicator')?.addEventListener('click', () => {
    document.querySelector('.gallery').scrollIntoView({ behavior: 'smooth' });
});
