/* =====================================================
   이애주 아카이브 - Three.js + CSS2DRenderer Engine
   Refactored to match Rauschenberg100.org architecture
   ===================================================== */

import * as THREE from 'https://unpkg.com/three@0.150.1/build/three.module.js';
import { OrbitControls } from 'https://unpkg.com/three@0.150.1/examples/jsm/controls/OrbitControls.js';
import { CSS2DRenderer, CSS2DObject } from 'https://unpkg.com/three@0.150.1/examples/jsm/renderers/CSS2DRenderer.js';
import TWEEN from 'https://cdnjs.cloudflare.com/ajax/libs/tween.js/18.6.4/tween.esm.js';

// Configuration
const IMAGE_FILES = ["AEJ-R-000019-1145.jpg", "AEJ-R-000019-1192.jpg", "AEJ-R-000019-1220.jpg", "AEJ-R-000019-1324.jpg", "AEJ-R-000019-164.jpg", "AEJ-R-000019-363.jpg", "AEJ-R-000019-371.jpg", "AEJ-R-30011-13.jpg", "AEJ-R-30013-88.jpg", "AEJ-R-30016-7.jpg", "AEJ-R-30025-11.jpg", "AEJ-R-400001.jpg", "AEJ-R-4000010.jpg", "AEJ-R-40000100.jpg", "AEJ-R-40000102.jpg", "AEJ-R-40000104.jpg", "AEJ-R-4000011.jpg", "AEJ-R-40000110.jpg", "AEJ-R-40000119.jpg", "AEJ-R-4000012.jpg", "AEJ-R-40000120.jpg", "AEJ-R-4000013.jpg", "AEJ-R-40000132.jpg", "AEJ-R-40000140.jpg", "AEJ-R-40000141.jpg", "AEJ-R-40000142.jpg", "AEJ-R-4000015.jpg", "AEJ-R-4000016.jpg", "AEJ-R-40000165.jpg", "AEJ-R-40000169.jpg", "AEJ-R-4000017.jpg", "AEJ-R-40000174.jpg", "AEJ-R-4000018.jpg", "AEJ-R-40000184.jpg", "AEJ-R-40000199.jpg", "AEJ-R-40000216.jpg", "AEJ-R-40000217.jpg", "AEJ-R-40000218.jpg", "AEJ-R-40000220.jpg", "AEJ-R-40000223.jpg", "AEJ-R-40000227.jpg", "AEJ-R-40000228.jpg", "AEJ-R-40000229.jpg", "AEJ-R-40000230.jpg", "AEJ-R-40000234.jpg", "AEJ-R-40000236.jpg", "AEJ-R-40000242.jpg", "AEJ-R-40000249.jpg", "AEJ-R-40000252.jpg", "AEJ-R-40000253.jpg", "AEJ-R-40000256.jpg", "AEJ-R-40000257.jpg", "AEJ-R-40000259.jpg", "AEJ-R-40000261.jpg", "AEJ-R-40000263.jpg", "AEJ-R-40000267.jpg", "AEJ-R-40000270.jpg", "AEJ-R-40000276.jpg", "AEJ-R-40000283.jpg", "AEJ-R-40000287.jpg", "AEJ-R-40000292.jpg", "AEJ-R-40000295.jpg", "AEJ-R-40000297.jpg", "AEJ-R-40000298.jpg", "AEJ-R-400003.jpg", "AEJ-R-40000300.jpg", "AEJ-R-40000313.jpg", "AEJ-R-40000319.jpg", "AEJ-R-40000331.jpg", "AEJ-R-40000337.jpg", "AEJ-R-40000339.jpg", "AEJ-R-40000343.jpg", "AEJ-R-40000344.jpg", "AEJ-R-40000348.jpg", "AEJ-R-40000350.jpg", "AEJ-R-40000351.jpg", "AEJ-R-40000361.jpg", "AEJ-R-40000362.jpg", "AEJ-R-40000366.jpg", "AEJ-R-40000367.jpg", "AEJ-R-40000368.jpg", "AEJ-R-40000369.jpg", "AEJ-R-40000370.jpg", "AEJ-R-40000372.jpg", "AEJ-R-40000374.jpg", "AEJ-R-40000377.jpg", "AEJ-R-400004.jpg", "AEJ-R-4000047.jpg", "AEJ-R-4000051.jpg", "AEJ-R-4000075.jpg", "AEJ-R-4000078.jpg", "AEJ-R-400008.jpg", "AEJ-R-4000086.jpg", "AEJ-R-400009.jpg", "AEJ-R-4000090.jpg", "AEJ-R-4000093.jpg", "AEJ-R-4000096.jpg", "AEJ-R-4000097.jpg", "AEJ-R-4000098.jpg", "AEJ-R-Z00001.jpg"];

class ArchiveEngine {
    constructor() {
        this.container = document.getElementById('collageCanvas');
        this.isLargeQuery = window.matchMedia("(min-width: 1024px)").matches;
        
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.labelRenderer = null;
        this.controls = null;
        this.items = [];
        this.isModalOpen = false;

        this.init();
    }

    init() {
        this.setupThree();
        this.setupImages();
        this.setupEventListeners();
        this.animate();
        this.alignLogoText();
    }

    setupThree() {
        const width = window.innerWidth;
        const height = window.innerHeight;

        // 1. Scene
        this.scene = new THREE.Scene();
        this.scene.position.set(0, 0, 0);
        this.scene.background = new THREE.Color(0xffffff);

        // 2. Camera (Orthographic — exact match to Rauschenberg source)
        this.camera = new THREE.OrthographicCamera(
            width / -2, width / 2,
            height / 2, height / -2,
            1, 5000
        );
        this.camera.position.set(1000, 1000, 1000);
        this.camera.lookAt(width / 2, height / 2, 0);

        // 3. WebGL Renderer
        this.renderer = new THREE.WebGLRenderer({
            antialias: true,
            powerPreference: 'high-performance'
        });
        this.renderer.setSize(width, height);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.container.appendChild(this.renderer.domElement);

        // 4. CSS2DRenderer
        this.labelRenderer = new CSS2DRenderer();
        this.labelRenderer.setSize(width, height);
        this.labelRenderer.domElement.style.position = 'absolute';
        this.labelRenderer.domElement.style.top = '0';
        this.container.appendChild(this.labelRenderer.domElement);

        // 5. OrbitControls (exact match to Rauschenberg source)
        if (this.isLargeQuery) {
            this.controls = new OrbitControls(this.camera, this.container);
        } else {
            this.controls = new OrbitControls(this.camera);
        }
        this.controls.rotateSpeed = 0.05;
        this.controls.zoomSpeed = 0.25;
        this.controls.addEventListener('change', () => this.render());
        this.controls.enablePan = false;
        this.controls.enableDamping = true;
        this.controls.enableZoom = false;
        this.controls.autoRotate = true;
        this.controls.autoRotateSpeed = this.isLargeQuery ? 0.07 : 0.12;
    }

    setupImages() {
        IMAGE_FILES.forEach((fileName, index) => {
            const item = document.createElement('div');
            item.className = 'collage-item';

            // Image size — exact match to Rauschenberg source
            if (this.isLargeQuery) {
                item.style.width = Math.floor(Math.random() * 250) + 50 + "px"; // 50-300px
            } else {
                item.style.width = Math.floor(Math.random() * 70) + 20 + "px"; // 20-90px
            }

            // Image Content
            const img = document.createElement('img');
            img.src = `images/${fileName}`;
            img.loading = 'lazy';
            img.onload = () => img.classList.add('loaded');
            item.appendChild(img);

            // Metadata & Overlay
            const fileNameWithoutExt = fileName.replace(/\.[^/.]+$/, '');
            const meta = window.IMAGE_METADATA ? window.IMAGE_METADATA[fileNameWithoutExt] : null;

            if (meta) {
                const overlay = document.createElement('div');
                overlay.className = 'hover-overlay';
                overlay.innerHTML = `
                    <h3 class="overlay-title">${meta.title || ''}</h3>
                    <h4 class="overlay-subtitle">${meta.subtitle || ''}</h4>
                    <p class="overlay-desc">${meta.description ? meta.description.substring(0, 80) + '...' : ''}</p>
                `;
                item.appendChild(overlay);
            }

            // Position — exact match to Rauschenberg source
            const x = Math.floor(Math.random() * window.innerWidth) - window.innerWidth / 2;
            const y = Math.floor(Math.random() * window.innerHeight) - window.innerHeight / 2;
            const z = Math.floor(Math.random() * window.innerWidth) - window.innerWidth / 2;

            // Save position data
            item.dataset.x = x;
            item.dataset.y = y;
            item.dataset.z = z;

            // Click interaction
            item.addEventListener('click', (e) => {
                e.stopPropagation();
                this.handleItemClick(index, fileName, meta, x, y, z);
            });

            const object = new CSS2DObject(item);
            object.position.set(x, y, z);
            this.scene.add(object);

            this.items.push({ object, meta, x, y, z });
        });
    }

    handleItemClick(index, fileName, meta, x, y, z) {
        if (this.isModalOpen) return;

        // Smooth Focus using TWEEN
        new TWEEN.Tween(this.camera.position)
            .to({ x: x + 100, y: y + 100, z: z + 100 }, 1000)
            .easing(TWEEN.Easing.Cubic.InOut)
            .start();

        const title = meta ? meta.title : `Archive Item #${index + 1}`;
        const desc = meta ? meta.description : fileName;
        this.openModal(`images/${fileName}`, title, desc);
    }

    setupEventListeners() {
        window.addEventListener('resize', () => this.handleResize());
        
        // Modal Event Listeners
        const modalEl = document.getElementById('imageModal');
        if (modalEl) {
            modalEl.addEventListener('click', (e) => {
                if (e.target === modalEl) this.closeModal();
            });
        }

        // Interaction Hint
        window.addEventListener('mousedown', () => {
            const hint = document.getElementById('exploreHint');
            if (hint) hint.classList.add('hidden');
        }, { once: true });
    }

    handleResize() {
        const width = window.innerWidth;
        const height = window.innerHeight;

        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();

        this.renderer.setSize(width, height);
        this.labelRenderer.setSize(width, height);
        this.render();
        this.alignLogoText();
    }

    animate() {
        requestAnimationFrame(() => this.animate());
        TWEEN.update();
        if (this.controls) this.controls.update();
        this.render();
    }

    render() {
        this.renderer.render(this.scene, this.camera);
        this.labelRenderer.render(this.scene, this.camera);
    }

    openModal(src, title, desc) {
        const modal = document.getElementById('imageModal');
        const modalImg = document.getElementById('modalImage');
        const modalTitle = document.getElementById('modalTitle');
        const modalDesc = document.getElementById('modalDesc');
        
        if (!modal || !modalImg) return;
        
        modalImg.src = src;
        modalTitle.innerText = title;
        modalDesc.innerText = desc;
        modal.classList.add('active');
        this.isModalOpen = true;
        this.controls.autoRotate = false;
    }

    closeModal() {
        const modal = document.getElementById('imageModal');
        if (modal) modal.classList.remove('active');
        this.isModalOpen = false;
        this.controls.autoRotate = true;
    }

    alignLogoText() {
        const title = document.querySelector('.logo-main');
        const subtitle = document.querySelector('.logo-sub');
        if (!title || !subtitle) return;
        
        document.fonts.ready.then(() => {
            subtitle.style.letterSpacing = '0px';
            subtitle.style.display = 'inline-block';
            const titleWidth = title.offsetWidth;
            const subtitleWidth = subtitle.offsetWidth;
            const charCount = subtitle.textContent.length;
            
            if (charCount > 1 && titleWidth > subtitleWidth) {
                const diff = titleWidth - subtitleWidth;
                const spacing = diff / (charCount - 1);
                subtitle.style.letterSpacing = `${spacing}px`;
                subtitle.style.marginRight = `-${spacing}px`;
            }
            subtitle.style.display = 'block';
            subtitle.style.opacity = '1';
        });
    }
}

// Global closeModal
window.closeModal = () => window.archiveEngine && window.archiveEngine.closeModal();

document.addEventListener('DOMContentLoaded', () => {
    window.archiveEngine = new ArchiveEngine();
});
