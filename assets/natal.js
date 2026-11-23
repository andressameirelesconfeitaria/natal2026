/* Catálogo independente — Natal 2026 | Andressa Meireles Confeitaria */
const NATAL_CART_STORAGE_KEY = 'andressa-meireles:natal-2026:cart:v1';
let cart = [];
let currentDetailProductId = null;
let currentDetailQty = 1;
let currentDetailImages = [];
let toastTimeout = null;
const productsCatalog = [];
const categoryNamesMap = {};
const natalCatalog = [{"id":"CEIA26-01","category":"natal","name":"Brownies Natalinos","subcat":"Presentes de Natal","tag":"","price":11.9,"desc":"Embalagem de 7 × 7 cm.","image":"imagens/natal-brownies-natalinos.jpg","inStock":true,"options":[{"label":"1 unidade","price":11.9},{"label":"5 unidades","price":47.5},{"label":"10 unidades","price":90},{"label":"20 unidades","price":170}],"flavors":["Brigadeiro","Ninho","Doce de leite"],"imageHover":"imagens/natal-brownies-natalinos-2.jpg","bestseller":false,"weight":"","validity":"","fullDesc":"Embalagem de 7 × 7 cm.","ingredients":"","allergens":""},{"id":"CEIA26-02","category":"natal","name":"Pão de mel","subcat":"Presentes de Natal","tag":"","price":11.9,"desc":"Recheio de doce de leite.","image":"imagens/natal-pao-de-mel.jpg","inStock":true,"options":[{"label":"1 unidade","price":11.9},{"label":"5 unidades","price":47.5},{"label":"10 unidades","price":90},{"label":"20 unidades","price":170}],"imageHover":"imagens/natal-pao-de-mel-2.jpg","bestseller":false,"weight":"","validity":"","fullDesc":"Recheio de doce de leite.","ingredients":"","allergens":""},{"id":"CEIA26-03","category":"natal","name":"Caixa de docinhos","subcat":"Presentes de Natal","tag":"","price":18.9,"desc":"Brigadeiros de chocolate gourmet.","image":"imagens/natal-caixa-de-docinhos.jpg","inStock":true,"imageHover":"imagens/natal-caixa-de-docinhos-2.jpg","bestseller":false,"weight":"","validity":"","fullDesc":"Brigadeiros de chocolate gourmet.","ingredients":"","allergens":""},{"id":"CEIA26-04","category":"natal","name":"Mini chocotone com gotas de chocolate","subcat":"Presentes de Natal","tag":"","price":12.9,"desc":"Mini chocotone de 100 g para presentear.","image":"imagens/natal-mini-chocotone-com-gotas-de-chocolate.jpg","inStock":true,"imageHover":"imagens/natal-mini-chocotone-com-gotas-de-chocolate-2.jpg","bestseller":false,"weight":"","validity":"","fullDesc":"Mini chocotone de 100 g para presentear.","ingredients":"","allergens":""},{"id":"CEIA26-05","category":"natal","name":"Mini chocotone recheado","subcat":"Presentes de Natal","tag":"","price":32.9,"desc":"Mini chocotone recheado de 170 g.","image":"imagens/natal-mini-chocotone-recheado.jpg","inStock":true,"options":[{"label":"1 unidade","price":32.9},{"label":"5 unidades","price":149.9},{"label":"10 unidades","price":289.9}],"flavors":["Limão siciliano com frutas vermelhas","Kinder com Nutella","Doce de leite com crocante de amendoim","Chocolatudo"],"imageHover":"imagens/natal-mini-chocotone-recheado-2.jpg","bestseller":false,"weight":"","validity":"","fullDesc":"Mini chocotone recheado de 170 g.","ingredients":"","allergens":""},{"id":"CEIA26-06","category":"natal","name":"Guirlanda de chocolate","subcat":"Sobremesas da ceia","tag":"","price":84.9,"desc":"Brownie de chocolate com brigadeiro de 50% cacau e brigadeiros de chocolate. 20 cm.","image":"imagens/natal-guirlanda-de-chocolate.jpg","inStock":true,"imageHover":"imagens/natal-guirlanda-de-chocolate-2.jpg","bestseller":false,"weight":"","validity":"","fullDesc":"Brownie de chocolate com brigadeiro de 50% cacau e brigadeiros de chocolate. 20 cm.","ingredients":"","allergens":""},{"id":"CEIA26-07","category":"natal","name":"Guirlanda de brownie","subcat":"Sobremesas da ceia","tag":"","price":94.9,"desc":"Brownie de chocolate com brigadeiro de Ninho e Nutella, Kinder Bueno e brigadeiros de Ninho com Nutella. 20 cm.","image":"imagens/natal-guirlanda-de-brownie.jpg","inStock":true,"imageHover":"imagens/natal-guirlanda-de-brownie-2.jpg","bestseller":false,"weight":"","validity":"","fullDesc":"Brownie de chocolate com brigadeiro de Ninho e Nutella, Kinder Bueno e brigadeiros de Ninho com Nutella. 20 cm.","ingredients":"","allergens":""},{"id":"CEIA26-08","category":"natal","name":"Rabanada tradicional","subcat":"Sobremesas da ceia","tag":"","price":64.9,"desc":"Porção com 15 unidades.","image":"imagens/natal-rabanada-tradicional.jpg","inStock":true,"imageHover":"imagens/natal-rabanada-tradicional-2.jpg","bestseller":false,"weight":"","validity":"","fullDesc":"Porção com 15 unidades.","ingredients":"","allergens":""},{"id":"CEIA26-09","category":"natal","name":"Rabanada recheada","subcat":"Sobremesas da ceia","tag":"","price":32.9,"desc":"Escolha a porção e o recheio.","image":"imagens/natal-rabanada-recheada.jpg","inStock":true,"options":[{"label":"3 unidades","price":32.9},{"label":"6 unidades","price":64.9}],"flavors":["Ninho","Chocolate","Ninho com Nutella","Doce de leite"],"imageHover":"imagens/natal-rabanada-recheada-2.jpg","bestseller":false,"weight":"","validity":"","fullDesc":"Escolha a porção e o recheio.","ingredients":"","allergens":""},{"id":"CEIA26-10","category":"natal","name":"Pudim de leite condensado","subcat":"Sobremesas da ceia","tag":"","price":59.9,"desc":"Aproximadamente 1,3 kg.","image":"imagens/natal-pudim-de-leite-condensado.jpg","inStock":true,"imageHover":"imagens/natal-pudim-de-leite-condensado-2.jpg","bestseller":false,"weight":"","validity":"","fullDesc":"Aproximadamente 1,3 kg.","ingredients":"","allergens":""},{"id":"CEIA26-11","category":"natal","name":"Pavê de limão","subcat":"Sobremesas da ceia","tag":"","price":64.9,"desc":"Biscoito e mousse de limão.","image":"imagens/natal-pave-de-limao.jpg","inStock":true,"options":[{"label":"P · 6 pessoas","price":64.9},{"label":"G · 12 pessoas","price":129.9}],"imageHover":"imagens/natal-pave-de-limao-2.jpg","bestseller":false,"weight":"","validity":"","fullDesc":"Biscoito e mousse de limão.","ingredients":"","allergens":""},{"id":"CEIA26-12","category":"natal","name":"Pavê de maracujá com chocolate","subcat":"Sobremesas da ceia","tag":"","price":69.9,"desc":"Mousse de maracujá e ganache de chocolate ao leite.","image":"imagens/natal-pave-de-maracuja-com-chocolate.jpg","inStock":true,"options":[{"label":"P · 6 pessoas","price":69.9},{"label":"G · 12 pessoas","price":139.9}],"imageHover":"imagens/natal-pave-de-maracuja-com-chocolate-2.jpg","bestseller":false,"weight":"","validity":"","fullDesc":"Mousse de maracujá e ganache de chocolate ao leite.","ingredients":"","allergens":""},{"id":"CEIA26-13","category":"natal","name":"Bombom de uva","subcat":"Sobremesas da ceia","tag":"","price":84.9,"desc":"Creme de Ninho, uvas verdes e ganache de chocolate.","image":"imagens/natal-bombom-de-uva.jpg","inStock":true,"options":[{"label":"P · 6 pessoas","price":84.9},{"label":"G · 12 pessoas","price":169.9}],"imageHover":"imagens/natal-bombom-de-uva-2.jpg","bestseller":false,"weight":"","validity":"","fullDesc":"Creme de Ninho, uvas verdes e ganache de chocolate.","ingredients":"","allergens":""},{"id":"CEIA26-14","category":"natal","name":"Travessa brownie com morangos","subcat":"Sobremesas da ceia","tag":"","price":84.9,"desc":"Brownie, creme de Ninho, morangos e chantininho.","image":"imagens/natal-travessa-brownie-com-morangos.jpg","inStock":true,"options":[{"label":"P · 6 pessoas","price":84.9},{"label":"G · 12 pessoas","price":169.9}],"imageHover":"imagens/natal-travessa-brownie-com-morangos-2.jpg","bestseller":false,"weight":"","validity":"","fullDesc":"Brownie, creme de Ninho, morangos e chantininho.","ingredients":"","allergens":""},{"id":"CEIA26-15","category":"natal","name":"Banoffee","subcat":"Sobremesas da ceia","tag":"","price":69.9,"desc":"Base de biscoito, doce de leite, creme de Ninho, banana caramelada e chantilly.","image":"imagens/natal-banoffee.jpg","inStock":true,"options":[{"label":"P · 6 pessoas","price":69.9},{"label":"G · 12 pessoas","price":139.9}],"imageHover":"imagens/natal-banoffee-2.jpg","bestseller":false,"weight":"","validity":"","fullDesc":"Base de biscoito, doce de leite, creme de Ninho, banana caramelada e chantilly.","ingredients":"","allergens":""},{"id":"CEIA26-16","category":"natal","name":"Bolo gelado de abacaxi","subcat":"Sobremesas da ceia","tag":"","price":69.9,"desc":"Massa branca com recheio de abacaxi, chantilly, abacaxi e cerejas.","image":"imagens/natal-bolo-gelado-de-abacaxi.jpg","inStock":true,"options":[{"label":"P · 6 pessoas","price":69.9},{"label":"G · 12 pessoas","price":139.9}],"imageHover":"imagens/natal-bolo-gelado-de-abacaxi-2.jpg","bestseller":false,"weight":"","validity":"","fullDesc":"Massa branca com recheio de abacaxi, chantilly, abacaxi e cerejas.","ingredients":"","allergens":""},{"id":"CEIA26-17","category":"natal","name":"Bolo natalino","subcat":"Bolos e kits","tag":"","price":114.9,"desc":"Bolo de 10 fatias com topper.","image":"imagens/natal-bolo-natalino.jpg","inStock":true,"imageHover":"imagens/natal-bolo-natalino-2.jpg","bestseller":false,"weight":"","validity":"","fullDesc":"Bolo de 10 fatias com topper.","ingredients":"","allergens":""},{"id":"CEIA26-18","category":"natal","name":"Kit festa natalino","subcat":"Bolos e kits","tag":"","price":179.9,"desc":"Bolo no acetato com topper de 15 cm (aprox. 1 kg), 60 salgadinhos e 25 docinhos.","image":"imagens/natal-kit-festa-natalino.jpg","inStock":true,"imageHover":"imagens/natal-kit-festa-natalino-2.jpg","bestseller":false,"weight":"","validity":"","fullDesc":"Bolo no acetato com topper de 15 cm (aprox. 1 kg), 60 salgadinhos e 25 docinhos.","ingredients":"","allergens":""},{"id":"CEIA26-19","category":"natal","name":"Salgadinhos","subcat":"Salgados","tag":"","price":39.9,"desc":"Coxinha, bolinha de queijo, enroladinho de queijo com presunto, kibe e aipim com carne.","image":"imagens/natal-salgadinhos.jpg","inStock":true,"options":[{"label":"50 unidades","price":39.9},{"label":"100 unidades","price":79.9}],"imageHover":"imagens/natal-salgadinhos-2.jpg","bestseller":false,"weight":"","validity":"","fullDesc":"Coxinha, bolinha de queijo, enroladinho de queijo com presunto, kibe e aipim com carne.","ingredients":"","allergens":""},{"id":"CEIA26-20","category":"natal","name":"Risoles de bacalhau","subcat":"Salgados","tag":"","price":49.9,"desc":"Porções de 50 ou 100 unidades.","image":"imagens/natal-risoles-de-bacalhau.jpg","inStock":true,"options":[{"label":"50 unidades","price":49.9},{"label":"100 unidades","price":89.9}],"imageHover":"imagens/natal-risoles-de-bacalhau-2.jpg","bestseller":false,"weight":"","validity":"","fullDesc":"Porções de 50 ou 100 unidades.","ingredients":"","allergens":""},{"id":"CEIA26-21","category":"natal","name":"Bolinho de bacalhau","subcat":"Salgados","tag":"","price":54.9,"desc":"Escolha a porção.","image":"imagens/natal-bolinho-de-bacalhau.jpg","inStock":true,"options":[{"label":"20 unidades · 500 g","price":54.9},{"label":"40 unidades · 1 kg","price":99.9}],"imageHover":"imagens/natal-bolinho-de-bacalhau-2.jpg","bestseller":false,"weight":"","validity":"","fullDesc":"Escolha a porção.","ingredients":"","allergens":""},{"id":"CEIA26-22","category":"natal","name":"Empadão de frango com Catupiry","subcat":"Salgados","tag":"","price":79.9,"desc":"Escolha o tamanho do empadão.","image":"imagens/natal-empadao-de-frango-com-catupiry.jpg","inStock":true,"imageHover":"imagens/natal-empadao-de-frango-com-catupiry-2.jpg","options":[{"label":"M · 20 cm · 8 pessoas","price":79.9},{"label":"G · 25 cm · 15 pessoas","price":154.9}],"bestseller":false,"weight":"","validity":"","fullDesc":"Escolha o tamanho do empadão.","ingredients":"","allergens":""}];

function switchView(viewId, afterShow = null) {
    const loader = document.getElementById('pageLoader');
    if (loader) loader.classList.remove('opacity-0', 'pointer-events-none');
    setTimeout(() => {
        document.querySelectorAll('.view-section').forEach(el => el.classList.add('hidden'));
        const target = document.getElementById(`view-${viewId}`);
        if (target) target.classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (viewId === 'natal') refreshNatalCovers();
        if (viewId === 'checkout') {
            const step3 = document.getElementById('checkoutStep3');
            if (step3) {
                step3.classList.add('hidden');
                document.getElementById('checkoutStep2')?.classList.add('hidden');
                document.getElementById('checkoutStep1')?.classList.remove('hidden');
                document.getElementById('step3Indicator')?.classList.remove('text-[#38201D]', 'border-b-2', 'border-[#C5A059]');
                document.getElementById('step2Indicator')?.classList.remove('text-[#38201D]', 'border-b-2', 'border-[#C5A059]');
                document.getElementById('step1Indicator')?.classList.add('text-[#38201D]', 'border-b-2', 'border-[#C5A059]');
            }
            renderCart();
        }
        if (afterShow) afterShow();
        setTimeout(() => loader?.classList.add('opacity-0', 'pointer-events-none'), 150);
    }, 180);
}

function refreshNatalCovers() {
    const img = document.getElementById('natalBannerImg');
    if (img && img.dataset.relativePath) img.src = img.dataset.relativePath;
}

function configureOrderForm() {
    const fields = orderField('natalOrderFields');
    fields.hidden = false;
    fields.disabled = false;
    orderField('orderForm').querySelector('[type=submit]').textContent = 'Conferir pedido ➔';
    orderField('step3Indicator').textContent = '3. Conferência do pedido';
    orderField('summaryTotal2').previousElementSibling.textContent = 'Total do pedido';
    updateNatalFields();
}
function submitOrder(e) {
    e.preventDefault();
    if (!cart.length || !natalOrdersOpen() || !orderField('orderForm').reportValidity()) return;
    orderField('natalReview').hidden = false;
    orderField('orderStatus').textContent = 'Confira sua solicitação de Natal';
    orderField('natalReviewText').textContent = [
        ...cart.map(i => i.qty + ' × ' + i.name + ' — ' + i.details),
        natalSummary()
    ].join('\n');
    orderField('checkoutStep2').classList.add('hidden');
    orderField('checkoutStep3').classList.remove('hidden');
    orderField('step2Indicator').classList.remove('text-[#38201D]', 'border-b-2', 'border-[#C5A059]');
    orderField('step3Indicator').classList.add('text-[#38201D]', 'border-b-2', 'border-[#C5A059]');
    orderField('finalOrderNumber').innerText = '#AM-2026-' + Math.floor(1000 + Math.random() * 9000);
}
function sendOrderToWhatsApp() {
    if (!natalOrdersOpen()) return;
    const name = orderField('clientName').value.trim();
    const phone = orderField('clientPhone').value.trim();
    const orderNum = orderField('finalOrderNumber').innerText;
    const itemsText = cart.map(i => '• *' + i.name + '* ' + (i.qty > 1 ? '(' + i.qty + 'x)' : '') + '\n  _' + i.details + '_\n  Valor: R$ ' + (i.price * i.qty).toFixed(2).replace('.', ',')).join('\n\n');
    const text = ['Olá, Andressa! Quero encomendar para o Natal 2026. Pedido ' + orderNum, 'Cliente: ' + name + ' (' + phone + ')', itemsText, natalSummary()].join('\n\n');
    (window.dataLayer ||= []).push({event: 'pedido_natal_whatsapp'});
    window.open('https://wa.me/5521981541545?text=' + encodeURIComponent(text), '_blank', 'noopener');
}

        function resolveImgUrl(src) {
            const path = String(src || '').trim();
            // O catálogo usa somente arquivos locais da pasta imagens/.
            return path.startsWith('imagens/') && !/^(?:[a-z]+:)?\/\//i.test(path) ? path : '';
        }


        function escapeText(value) {
            const node = document.createElement('span');
            node.textContent = value;
            return node.innerHTML;
        }


        function showToast(msg) {
            const toast = document.getElementById('toastNotification');
            const msgEl = document.getElementById('toastMessage');
            if (!toast || !msgEl) return;
            msgEl.innerText = msg;
            toast.classList.remove('translate-y-24', 'opacity-0');
            toast.classList.add('translate-y-0', 'opacity-100');
            if (toastTimeout) clearTimeout(toastTimeout);
            toastTimeout = setTimeout(() => {
                toast.classList.remove('translate-y-0', 'opacity-100');
                toast.classList.add('translate-y-24', 'opacity-0');
            }, 3000);
        }


        function moveNatalSlide(direction) {
            const track = document.getElementById('natalSlides');
            const count = track.children.length;
            const current = Math.round(track.scrollLeft / track.clientWidth);
            const next = (current + direction + count) % count;
            track.scrollTo({left: next * track.clientWidth, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'});
        }



        function openNatalPage(category = 'all') {
            renderNatalCatalog(category);
            switchView('natal');
        }



        function renderNatalCatalog(category = document.getElementById('natalCategory').value) {
            const select = document.getElementById('natalCategory');
            const categories = [...new Set(natalCatalog.map(product => product.subcat).filter(Boolean))];
            const options = categories.map(name => new Option(name, name));
            select.replaceChildren(new Option('Todos os produtos', 'all'), ...options);
            select.value = categories.includes(category) ? category : 'all';
            const list = select.value === 'all' ? natalCatalog : natalCatalog.filter(product => product.subcat === select.value);
            const grid = document.getElementById('natalProductsGrid');
            const countLabel = document.getElementById('natalProductsCountLabel');
            if (countLabel) {
                countLabel.innerText = `${list.length} ${list.length === 1 ? 'produto' : 'produtos'}`;
            }


            if (list.length === 0) {
                grid.innerHTML = `
                    <div class="col-span-full bg-white border border-gray-200 p-10 text-center space-y-3">
                        <p class="font-serif text-xl text-[#38201D]">Nenhum produto de Natal encontrado com estes filtros.</p>
                        <button onclick="renderNatalCatalog('all')" class="bg-[#38201D] text-white px-5 py-2.5 text-xs font-bold uppercase tracking-wider cursor-pointer">Limpar Filtros</button>
                    </div>
                `;
            } else {
                grid.innerHTML = list.map(item => {
                    const img1Src = resolveImgUrl(item.image);
                    const img2Src = resolveImgUrl(item.imageHover || item.image);
                    const isOut = item.inStock === false;
                    return `
                        <div class="bg-[#FAF7F2] flex flex-col group transition-all">
                            <div class="relative w-full aspect-[3/4] bg-white overflow-hidden cursor-pointer shadow-xs border border-gray-200/60" onclick="openProductDetailPage('${item.id}')">
                                <img loading="lazy" decoding="async" src="${img1Src}" alt="${item.name}" class="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-95 transition-all duration-700 ease-out group-hover:opacity-0 ${isOut ? 'opacity-75' : ''}">
                                <img loading="lazy" decoding="async" src="${img2Src}" alt="${item.name} detalhe" class="absolute inset-0 w-full h-full object-cover opacity-0 scale-[1.12] group-hover:scale-100 group-hover:opacity-100 transition-all duration-700 ease-out">

                                ${isOut ? `<div class="absolute top-2.5 left-2.5 bg-[#38201D] text-[#FAF7F2] text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 z-10">EM BREVE</div>` : ''}

                                ${!isOut ? `<button type="button" class="natal-cart" aria-label="${item.options?.length || item.flavors?.length || item.subcat === 'Bolos e kits' ? 'Ver opções' : 'Adicionar à sacola'}" onclick="event.stopPropagation(); addNatalItemQuickToBag('${item.id}')"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M2 4h3l3 12h11l3-9H6 M10 20h.01 M18 20h.01"/></svg></button>` : ''}

                            </div>
                            <div class="py-3.5 px-2 text-center bg-[#FAF7F2] cursor-pointer" onclick="openProductDetailPage('${item.id}')">
                                <h3 class="font-serif font-bold text-xs sm:text-sm text-[#38201D] uppercase tracking-wide line-clamp-2 group-hover:text-[#7A1C1C] transition-colors">${item.name}</h3>
                        <p class="text-[11px] text-[#38201D]/65 mt-0.5 line-clamp-1">${item.desc || ''}</p>
                                <div class="font-serif font-bold text-sm sm:text-base text-[#38201D] mt-1">${item.options?.length ? 'A partir de ' : ''}R$ ${Number(item.price).toFixed(2).replace('.', ',')}</div>
                            </div>
                        </div>
                    `;
                }).join('');
            }

        }



        function addNatalItemQuickToBag(natalId) {
            const prod = natalCatalog.find(p => p.id === natalId);
            if (!prod || prod.inStock === false) return;
            if (prod.options?.length || prod.flavors?.length || prod.subcat === 'Bolos e kits') return openProductDetailPage(prod.id);
            cart.push({
                name: prod.name,
                collection: 'natal2026',
                details: `Coleção Natal 2026 (#${prod.id})`,
                price: prod.price,
                qty: 1
            });
            updateCartBadge();
            showToast(`${prod.name} adicionado à sacola!`);
            switchView('checkout');
        }



        function shareCurrentProductWhatsApp() {
            const prod = productsCatalog.find(p => p.id === currentDetailProductId) || natalCatalog.find(p => p.id === currentDetailProductId);
            if (!prod) return;
            const text = `Olha que delícia da Andressa Meireles Confeitaria: *${prod.name}* (R$ ${prod.price.toFixed(2).replace('.', ',')})!`;
            window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
        }



        function copyCurrentProductName() {
            const prod = productsCatalog.find(p => p.id === currentDetailProductId) || natalCatalog.find(p => p.id === currentDetailProductId);
            if (!prod) return;
            const ta = document.createElement('textarea');
            ta.value = `${prod.name} - R$ ${prod.price.toFixed(2).replace('.', ',')} | Andressa Meireles Confeitaria`;
            document.body.appendChild(ta);
            ta.select();
            document.execCommand('copy');
            document.body.removeChild(ta);
            showToast('Informações do produto copiadas!');
        }



        function renderNatalChoiceList(id, options) {
            const list = document.getElementById(id);
            list.parentElement.hidden = options.length === 0;
            list.replaceChildren(...options.map((option, index) => {
                const row = document.createElement('label');
                row.className = 'flex items-center gap-3 px-3 py-3 text-sm cursor-pointer';
                const input = document.createElement('input');
                input.type = 'radio';
                input.name = id;
                input.value = option.value;
                input.checked = index === 0;
                input.className = 'accent-[#7A1C1C]';
                input.addEventListener('change', updatePdDynamicTotal);
                row.append(input, option.text);
                return row;
            }));
        }



        function updatePdDynamicTotal() {
            const natalProd = natalCatalog.find(p => p.id === currentDetailProductId);
            if (natalProd) {
                const op = natalProd.options?.[document.querySelector('#pdNatalPack input:checked')?.value];
                const total = (op?.price ?? natalProd.price) * currentDetailQty;
                const priceEl = document.getElementById('pdPrice');
                if (priceEl) priceEl.innerText = `R$ ${total.toFixed(2).replace('.', ',')}`;

                const btnEl = document.getElementById('pdAddToBagBtn');
                if (btnEl) {
                    if (natalProd.inStock === false) {
                        btnEl.disabled = true;
                        btnEl.innerText = 'EM BREVE • FORA DE ESTOQUE';
                        btnEl.classList.add('opacity-60', 'cursor-not-allowed');
                    } else {
                        btnEl.disabled = false;
                        btnEl.classList.remove('opacity-60', 'cursor-not-allowed');
                        btnEl.innerText = `ADICIONAR À SACOLA • R$ ${total.toFixed(2).replace('.', ',')}`;
                    }
                }
                return;
            }

            const prod = productsCatalog.find(p => p.id === currentDetailProductId);
            if (!prod) return;
            const extrasChecked = Array.from(document.querySelectorAll('input[name="pdExtraItemCheck"]:checked'));
            const extrasSum = extrasChecked.reduce((acc, el) => acc + (parseFloat(el.dataset.price) || 0), 0);

            let boloRecheioExtra = 0;
            if (prod.category === 'bolo') {
                const rSel = document.getElementById('pdBoloRecheioSelect');
                if (rSel && rSel.selectedOptions[0]) {
                    boloRecheioExtra = parseFloat(rSel.selectedOptions[0].dataset.extra || '0');
                }
            }

            const unitPrice = prod.price + boloRecheioExtra;
            const total = (unitPrice * currentDetailQty) + extrasSum;

            const priceEl = document.getElementById('pdPrice');
            if (priceEl) {
                priceEl.innerText = `R$ ${total.toFixed(2).replace('.', ',')}`;
            }
            const btnEl = document.getElementById('pdAddToBagBtn');
            if (btnEl) {
                btnEl.disabled = false;
                btnEl.classList.remove('opacity-60', 'cursor-not-allowed');
                btnEl.innerText = `ADICIONAR À SACOLA • R$ ${total.toFixed(2).replace('.', ',')}`;
            }
        }



        function openProductDetailPage(productId, focusSectionId = null) {
            const natalProd = natalCatalog.find(p => p.id === productId);
            const prod = natalProd || productsCatalog.find(p => p.id === productId);
            if (!prod) return;

            const isNatal = Boolean(natalProd);
            currentDetailProductId = prod.id;
            document.getElementById('comboFlavorBox')?.classList.toggle('hidden', prod.id !== 'DOCE01');
            document.querySelectorAll('[name="comboFlavor"]').forEach(el => el.checked = false);
            currentDetailQty = 1;

            const catLabel = isNatal ? (prod.subcat || 'Coleção Natal 2026') : (categoryNamesMap[prod.category] || 'Catálogo');
            document.getElementById('pdBreadcrumbCat').innerText = catLabel;
            document.getElementById('pdBreadcrumbCat').onclick = () => {
                if (isNatal) {
                    openNatalPage(prod.subcat || 'all');
                } else {
                    switchView('home');
                    setTimeout(() => filterCatalog(prod.category, null, true), 300);
                }
            };
            document.getElementById('pdBreadcrumbName').innerText = prod.name;

            const backBtn = document.getElementById('pdBackBtn');
            if (backBtn) {
                if (isNatal) {
                    backBtn.innerHTML = '<span>← Voltar para Natal 2026</span>';
                    backBtn.onclick = () => switchView('natal');
                } else {
                    backBtn.innerHTML = '<span>← Voltar aos Produtos</span>';
                    backBtn.onclick = () => openReady(document.getElementById('readyCategory').value);
                }
            }

            document.getElementById('pdCategoryTag').innerText = isNatal ? `NATAL 2026 • ${catLabel.toUpperCase()}` : catLabel.toUpperCase();
            document.getElementById('pdCodeBadge').innerText = `#${prod.id}`;
            document.getElementById('pdTitle').innerText = prod.name;
            document.getElementById('pdPrice').innerText = `R$ ${prod.price.toFixed(2).replace('.', ',')}`;
            document.getElementById('pdShortDesc').innerText = prod.desc || '';

            const stockTextEl = document.getElementById('pdStockStatusText');
            const cornerBadge = document.getElementById('pdAvailabilityCornerBadge');
            const taglineEl = document.getElementById('pdTaglineBadge');

            if (isNatal && prod.inStock === false) {
                if (stockTextEl) {
                    stockTextEl.innerText = '● Fora de estoque (Em breve)';
                    stockTextEl.className = 'text-[11px] font-semibold text-[#7A1C1C] flex items-center gap-1';
                }
                if (cornerBadge) cornerBadge.innerText = 'EM BREVE';
            } else {
                if (stockTextEl) {
                    stockTextEl.innerText = '● Em estoque';
                    stockTextEl.className = 'text-[11px] font-semibold text-emerald-700 flex items-center gap-1';
                }
                if (cornerBadge) cornerBadge.innerText = isNatal ? 'Natal 2026' : 'Pronta Entrega';
            }
            if (taglineEl) {
                taglineEl.innerText = isNatal ? 'Edição Especial Natal 2026' : 'Pronta Entrega';
            }

            const fullDescEl = document.getElementById('pdFullDescription');
            if (fullDescEl) {
                fullDescEl.innerText = prod.fullDesc || prod.desc || '';
            }

            const metaEl = document.getElementById('pdWeightValidityMeta');
            if (metaEl) {
                if (isNatal && (prod.weight || prod.validity)) {
                    metaEl.classList.remove('hidden');
                    metaEl.innerHTML = `
                        ${prod.weight ? `<span><strong>Peso:</strong> ${prod.weight}</span>` : ''}
                        ${prod.validity ? `<span><strong>Validade:</strong> ${prod.validity}</span>` : ''}
                    `;
                } else {
                    metaEl.classList.add('hidden');
                    metaEl.innerHTML = '';
                }
            }

            const ingAcc = document.getElementById('pdIngredientsAccordion');
            const ingTxt = document.getElementById('pdIngredientsText');
            if (ingAcc && ingTxt) {
                if (isNatal && prod.ingredients && prod.ingredients.trim()) {
                    ingAcc.classList.remove('hidden');
                    ingAcc.open = false;
                    ingTxt.innerText = prod.ingredients;
                } else {
                    ingAcc.classList.add('hidden');
                }
            }

            const allAcc = document.getElementById('pdAllergensAccordion');
            const allTxt = document.getElementById('pdAllergensText');
            if (allAcc && allTxt) {
                if (isNatal && prod.allergens && prod.allergens.trim()) {
                    allAcc.classList.remove('hidden');
                    allAcc.open = false;
                    allTxt.innerText = prod.allergens;
                } else {
                    allAcc.classList.add('hidden');
                }
            }

            const img1 = resolveImgUrl(prod.image);
            const img2 = prod.imageHover ? resolveImgUrl(prod.imageHover) : '';
            currentDetailImages = (img2 && img2 !== img1) ? [img1, img2] : [img1];
            const mainImgEl = document.getElementById('pdMainImg');
            if (mainImgEl) mainImgEl.src = img1;

            const thumbsRow = document.getElementById('pdThumbnailsRow');
            if (thumbsRow) {
                if (currentDetailImages.length > 1) {
                    thumbsRow.classList.remove('hidden');
                    thumbsRow.innerHTML = currentDetailImages.map((src, idx) => `
                        <button type="button" onclick="setPdMainImage(${idx})" class="pd-thumb-btn w-16 h-20 ${idx === 0 ? 'border-2 border-[#38201D]' : 'border border-gray-300 hover:border-[#38201D]'} overflow-hidden bg-white cursor-pointer">
                            <img loading="lazy" decoding="async" src="${src}" class="w-full h-full object-cover">
                        </button>
                    `).join('');
                } else {
                    thumbsRow.classList.add('hidden');
                    thumbsRow.innerHTML = '';
                }
            }

            const qtyInput = document.getElementById('pdQtyInput');
            if (qtyInput) qtyInput.value = '1';
            const notesInput = document.getElementById('pdCustomNotes');
            if (notesInput) {
                notesInput.value = '';
                notesInput.placeholder = isNatal ? 'Escreva uma observação, se desejar.' : 'Ex: Massa branca, recheio de Brigadeiro ou Ninho, número da vela ou recadinho...';
                notesInput.labels[0].textContent = isNatal ? 'Observação (opcional)' : '🎂 Preferência de Sabor ou Observação (Opcional)';
            }

            const hlContainer = document.getElementById('pdHighlightsContainer');
            const storeExtrasWrapper = document.getElementById('pdStoreExtrasWrapper');

            const choices = document.getElementById('pdNatalChoices');
            choices.hidden = !isNatal;
            if (isNatal) {
                renderNatalChoiceList('pdNatalPack', (prod.options || []).map((op, i) => ({
                    value: String(i), text: op.label + ' — R$ ' + op.price.toFixed(2).replace('.', ',')
                })));
                renderNatalChoiceList('pdNatalFlavor', (prod.flavors || []).map(name => ({ value: name, text: name })));
                document.getElementById('pdNatalCakeGuide').hidden = prod.subcat !== 'Bolos e kits';
            }
            if (isNatal) {
                if (hlContainer) hlContainer.classList.add('hidden');
                if (storeExtrasWrapper) storeExtrasWrapper.classList.add('hidden');
                document.getElementById('pdMainVelaNumericaBox')?.classList.add('hidden');
                document.getElementById('pdBoloCelebrarConfigBox')?.classList.add('hidden');
                document.getElementById('pdPiscininhaConfigBox')?.classList.add('hidden');
                document.getElementById('pdKitFlavorsSection')?.classList.add('hidden');
                document.getElementById('pdOpenKitBuilderLink')?.classList.add('hidden');
            } else {
                if (hlContainer) hlContainer.classList.remove('hidden');
                if (storeExtrasWrapper) storeExtrasWrapper.classList.remove('hidden');

                const highlights = getHighlightsForProduct(prod);
                const hlList = document.getElementById('pdHighlightsList');
                if (hlList) {
                    hlList.innerHTML = highlights.map(h => `
                        <div class="flex items-center gap-2 bg-[#FAF7F2] px-3 py-2 border border-[#EDE5DC]/80 font-medium">
                            <span>${h}</span>
                        </div>
                    `).join('');
                }

                const kbLink = document.getElementById('pdOpenKitBuilderLink');
                if (kbLink) {
                    if (prod.category === 'kit') kbLink.classList.remove('hidden');
                    else kbLink.classList.add('hidden');
                }

                renderProductDetailOptionsAndFlavors(prod);
            }

            updatePdDynamicTotal();

            const relatedGrid = document.getElementById('pdRelatedGrid');
            if (relatedGrid) {
                let relatedList = [];
                if (isNatal) {
                    const sameSub = natalCatalog.filter(p => p.id !== prod.id && p.subcat === prod.subcat);
                    const others = natalCatalog.filter(p => p.id !== prod.id && p.subcat !== prod.subcat);
                    relatedList = [...sameSub, ...others].slice(0, 3);
                } else {
                    const sameCat = productsCatalog.filter(p => p.id !== prod.id && p.category === prod.category);
                    const others = productsCatalog.filter(p => p.id !== prod.id && p.category !== prod.category && p.category !== 'bebida');
                    relatedList = [...sameCat, ...others].slice(0, 3);
                }

                relatedGrid.innerHTML = relatedList.map(rel => {
                    const relImg = resolveImgUrl(rel.image);
                    const btnCall = isNatal ? `addNatalItemQuickToBag('${rel.id}')` : `handleCatalogPrimaryAction('${rel.id}')`;
                    return `
                        <div class="bg-[#FAF7F2] rounded-none flex flex-col group transition-all">
                            <div class="relative w-full aspect-[3/4] bg-white overflow-hidden cursor-pointer shadow-xs border border-gray-200/60" onclick="openProductDetailPage('${rel.id}')">
                                <img loading="lazy" decoding="async" src="${relImg}" alt="${rel.name}" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
                                <div class="absolute bottom-0 inset-x-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2.5 z-10">
                                    <button type="button" onclick="event.stopPropagation(); ${btnCall}" class="w-full bg-white hover:bg-[#38201D] text-[#38201D] hover:text-white font-bold text-[11px] uppercase tracking-wider py-2.5 px-3 shadow-lg transition-colors cursor-pointer">
                                        ADICIONAR À SACOLA
                                    </button>
                                </div>
                            </div>
                            <div class="py-3 px-2 text-center cursor-pointer" onclick="openProductDetailPage('${rel.id}')">
                                <h4 class="font-serif font-bold text-xs sm:text-sm text-[#38201D] uppercase tracking-wide line-clamp-1">${rel.name}</h4>
                                <div class="font-serif font-bold text-sm text-[#38201D] mt-0.5">R$ ${rel.price.toFixed(2).replace('.', ',')}</div>
                            </div>
                        </div>
                    `;
                }).join('');
            }

            switchView('product-detail');

            if (focusSectionId) {
                setTimeout(() => {
                    const targetBox = document.getElementById(focusSectionId);
                    if (targetBox && !targetBox.classList.contains('hidden')) {
                        targetBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                }, 380);
            }
        }



        function setPdMainImage(index) {
            const mainImgEl = document.getElementById('pdMainImg');
            if (!mainImgEl || !currentDetailImages[index]) return;
            mainImgEl.src = currentDetailImages[index];
            document.querySelectorAll('.pd-thumb-btn').forEach((btn, idx) => {
                btn.classList.remove('border-2', 'border-[#38201D]', 'border', 'border-gray-300');
                if (idx === index) {
                    btn.classList.add('border-2', 'border-[#38201D]');
                } else {
                    btn.classList.add('border', 'border-gray-300');
                }
            });
        }



        function changePdQty(delta) {
            currentDetailQty = Math.max(1, currentDetailQty + delta);
            const qtyInput = document.getElementById('pdQtyInput');
            if (qtyInput) qtyInput.value = String(currentDetailQty);
            updatePdDynamicTotal();
        }



        function addProductFromDetailToBag() {
            const natalProd = natalCatalog.find(p => p.id === currentDetailProductId);
            if (natalProd) {
                if (natalProd.inStock === false) return;
                const notes = (document.getElementById('pdCustomNotes')?.value || '').trim();
                const op = natalProd.options?.[document.querySelector('#pdNatalPack input:checked')?.value];
                const flavor = document.querySelector('#pdNatalFlavor input:checked')?.value;
                cart.push({
                    collection: 'natal2026',
                    name: natalProd.name,
                    details: [`Coleção Natal 2026 (#${natalProd.id})`, op?.label, flavor, notes].filter(Boolean).join(' · '),
                    price: op?.price ?? natalProd.price,
                    qty: currentDetailQty
                });

                updateCartBadge();
                showToast(`${natalProd.name} adicionado à sacola!`);
                switchView('checkout');
                return;
            }

            const prod = productsCatalog.find(p => p.id === currentDetailProductId);
            if (!prod) return;

            const customNotes = (document.getElementById('pdCustomNotes')?.value || '').trim();
            const { salgadosCount, brigadeirosCount } = getKitEntitlementsForProduct(prod);

            let mainNumericChoices = [];
            if (prod.id === 'VELA03' || /vela.*num[eé]rica/i.test(prod.name)) {
                mainNumericChoices = Array.from(document.querySelectorAll('input[name="pdMainVelaNumericaChoice"]:checked')).map(el => el.value);
                if (mainNumericChoices.length === 0) {
                    showToast('Selecione qual número (0 a 9) ou Vela Interrogação (?) você deseja.');
                    const box = document.getElementById('pdMainVelaNumericaBox');
                    if (box) box.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    return;
                }
            }

            const numericExtraChecked = Array.from(document.querySelectorAll('input[name="pdExtraItemCheck"]:checked')).find(el => el.dataset.isNumeric === 'true');
            const extraNumericChoices = Array.from(document.querySelectorAll('input[name="pdExtraVelaNumericaChoice"]:checked')).map(el => el.value);
            if (numericExtraChecked && extraNumericChoices.length === 0) {
                showToast('Selecione na lista abaixo da Vela Numérica qual número (0 a 9) ou Interrogação (?) você deseja.');
                const sub = document.getElementById('pdNumericCandleSublist');
                if (sub) sub.scrollIntoView({ behavior: 'smooth', block: 'center' });
                return;
            }

            let detailsParts = [`Item #${prod.id}`];
            if (prod.id === 'DOCE01') {
                const flavor = document.querySelector('[name="comboFlavor"]:checked');
                if (!flavor) return showToast('Escolha o sabor da fatia.');
                detailsParts.push('Fatia: ' + flavor.value);
            }
            let unitPriceToUse = prod.price;

            if (mainNumericChoices.length > 0) {
                detailsParts.push(`Opção escolhida: ${mainNumericChoices.join(', ')}`);
            }

            if (prod.category === 'bolo') {
                const massaEscolhida = document.getElementById('pdBoloMassaSelect')?.value || 'Massa Amanteigada Branca';
                const rSel = document.getElementById('pdBoloRecheioSelect');
                const recheioEscolhido = rSel ? rSel.value : 'Brigadeiro Tradicional Cremoso';
                const extraRecheio = (rSel && rSel.selectedOptions[0]) ? parseFloat(rSel.selectedOptions[0].dataset.extra || '0') : 0;
                unitPriceToUse += extraRecheio;
                detailsParts.push(`Massa: ${massaEscolhida}`);
                detailsParts.push(`Recheio: ${recheioEscolhido}`);
            }

            if (prod.category === 'piscininha') {
                const isCenoura = (prod.id === 'PISC01' || /cenoura/i.test(prod.name));
                const isSeusSabores = (prod.id === 'PISC03' || /seus\s*sabores|meio\s*a\s*meio/i.test(prod.name));

                if (!isCenoura) {
                    const massaPisc = document.querySelector('input[name="pdPiscininhaMassa"]:checked')?.value || 'Massa Branca';
                    detailsParts.push(`Massa: ${massaPisc}`);

                    if (isSeusSabores) {
                        const recheiosPisc = Array.from(document.querySelectorAll('input[name="pdPiscininhaRecheio"]:checked')).map(el => el.value);
                        if (recheiosPisc.length === 0) {
                            showToast('Selecione até 2 sabores de recheio para o seu Bolo Piscininha!');
                            const box = document.getElementById('pdPiscininhaRecheiosWrapper');
                            if (box) box.scrollIntoView({ behavior: 'smooth', block: 'center' });
                            return;
                        }
                        detailsParts.push(`Recheios (até 2): ${recheiosPisc.join(' + ')}`);
                    }
                }
            }

            if (salgadosCount > 0) {
                const chosenSalg = Array.from(document.querySelectorAll('input[name="pdSalgadoFlavor"]:checked')).map(el => el.value);
                if (prod.category === 'salgado' && chosenSalg.length === 0) {
                    showToast('Selecione pelo menos 1 sabor de salgadinho (até 5 opções).');
                    const box = document.getElementById('pdSalgadosFlavorBox');
                    if (box) box.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    return;
                }
                detailsParts.push(`Salgados (${salgadosCount} un): ${chosenSalg.length > 0 ? chosenSalg.join(', ') : 'Sortidos padrão'}`);
            }

            if (brigadeirosCount > 0) {
                const chosenBrig = Array.from(document.querySelectorAll('input[name="pdBrigadeiroFlavor"]:checked')).map(el => el.value);
                if (prod.category === 'doce' && chosenBrig.length === 0) {
                    showToast('Selecione pelo menos 1 sabor de brigadeiro (até 5 opções).');
                    const box = document.getElementById('pdBrigadeirosFlavorBox');
                    if (box) box.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    return;
                }
                detailsParts.push(`Brigadeiros (${brigadeirosCount} un): ${chosenBrig.length > 0 ? chosenBrig.join(', ') : 'Sortidos padrão'}`);
            }

            if (customNotes) {
                detailsParts.push(`Obs/Sabor: ${customNotes}`);
            }

            cart.push({
                name: mainNumericChoices.length > 0 ? `${prod.name} (${mainNumericChoices.join(', ')})` : prod.name,
                details: detailsParts.join(' | '),
                price: unitPriceToUse,
                qty: currentDetailQty
            });

            const extrasChecked = Array.from(document.querySelectorAll('input[name="pdExtraItemCheck"]:checked'));
            extrasChecked.forEach(extraEl => {
                let extraLabel = extraEl.dataset.label || 'Adicional';
                const extraPrice = parseFloat(extraEl.dataset.price || '0');
                let extraDetails = `Adicional escolhido com ${prod.name}`;

                if (extraEl.dataset.isNumeric === 'true' && extraNumericChoices.length > 0) {
                    extraLabel = `${extraLabel} (${extraNumericChoices.join(', ')})`;
                    extraDetails = `Opções escolhidas: ${extraNumericChoices.join(', ')} | Com ${prod.name}`;
                }

                cart.push({
                    name: extraLabel,
                    details: extraDetails,
                    price: extraPrice,
                    qty: 1
                });
            });

            updateCartBadge();
            showToast(`${prod.name} adicionado à sacola!`);
            switchView('checkout');
        }



        // Persiste a sacola no navegador para que ela sobreviva ao fechamento da página.
        // localStorage é apropriado aqui: não depende de cookies nem de uma sessão ativa.
        function saveCartToStorage() {
            try {
                if (!cart.length) {
                    localStorage.removeItem(NATAL_CART_STORAGE_KEY);
                    return;
                }
                const payload = {
                    version: 1,
                    updatedAt: Date.now(),
                    items: cart.map(item => ({
                        name: String(item.name || ''),
                        details: String(item.details || ''),
                        price: Number(item.price),
                        qty: Number(item.qty),
                        ...(item.collection ? { collection: String(item.collection) } : {})
                    }))
                };
                localStorage.setItem(NATAL_CART_STORAGE_KEY, JSON.stringify(payload));
            } catch (error) {
                // Se o navegador bloquear armazenamento, a sacola continua funcionando nesta visita.
                console.warn('Não foi possível salvar a sacola neste navegador.', error);
            }
        }

        function restoreCartFromStorage() {
            try {
                const raw = localStorage.getItem(NATAL_CART_STORAGE_KEY);
                if (!raw) return;
                const payload = JSON.parse(raw);
                if (!payload || payload.version !== 1 || !Array.isArray(payload.items)) {
                    localStorage.removeItem(NATAL_CART_STORAGE_KEY);
                    return;
                }
                cart = payload.items
                    .filter(item => item && typeof item.name === 'string' && item.name.trim() &&
                        Number.isFinite(Number(item.price)) && Number(item.price) >= 0 &&
                        Number.isFinite(Number(item.qty)) && Number(item.qty) > 0)
                    .map(item => ({
                        name: item.name,
                        details: String(item.details || ''),
                        price: Number(item.price),
                        qty: Math.max(1, Math.floor(Number(item.qty))),
                        ...(item.collection ? { collection: String(item.collection) } : {})
                    }));
                if (!cart.length) localStorage.removeItem(NATAL_CART_STORAGE_KEY);
            } catch (error) {
                cart = [];
                try { localStorage.removeItem(NATAL_CART_STORAGE_KEY); } catch (_) {}
                console.warn('Não foi possível recuperar a sacola salva.', error);
            }
        }

        function updateCartBadge() {
            const totalQty = cart.reduce((acc, item) => acc + item.qty, 0);
            const badge = document.getElementById('cartCountBadge');
            if (badge) badge.innerText = totalQty;
            saveCartToStorage();
        }



        function renderCart() {
            const container = document.getElementById('cartItemsList');
            if(cart.length === 0) {
                container.innerHTML = `<p class="text-xs text-[#38201D]/70 py-4 text-center">Seu carrinho está vazio.</p>`;
                document.getElementById('summarySubtotal').innerText = 'R$ 0,00';
                document.getElementById('summaryTotal').innerText = 'R$ 0,00';
                return;
            }
            container.innerHTML = cart.map((item, idx) => `
                <div class="py-4 flex items-center justify-between gap-4">
                    <div>
                        <h4 class="font-serif font-bold text-sm text-[#38201D]">${item.name} ${item.qty > 1 ? `(${item.qty}x)` : ''}</h4>
                        <p class="text-[11px] text-[#38201D]/60 leading-relaxed">${escapeText(item.details)}</p>
                    </div>
                    <div class="flex items-center gap-4 shrink-0">
                        <span class="font-bold text-sm text-[#38201D]">R$ ${(item.price * item.qty).toFixed(2).replace('.', ',')}</span>
                        <button onclick="removeItem(${idx})" class="text-red-500 font-bold text-xs">✕</button>
                    </div>
                </div>
            `).join('');
            const total = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
            document.getElementById('summarySubtotal').innerText = `R$ ${total.toFixed(2).replace('.', ',')}`;
            document.getElementById('summaryTotal').innerText = `R$ ${total.toFixed(2).replace('.', ',')}`;
        }



        function removeItem(idx) { cart.splice(idx, 1); updateCartBadge(); renderCart(); }


        function clearCart() { cart = []; updateCartBadge(); renderCart(); }



        function goToCheckoutStep2() {
            if(cart.length === 0) {
                showToast('Adicione pelo menos um item ao carrinho.');
                return;
            }
            if (hasNatalOrder() && !natalOrdersOpen()) return;
            configureOrderForm();
            document.getElementById('checkoutStep1').classList.add('hidden');
            document.getElementById('checkoutStep2').classList.remove('hidden');
            document.getElementById('step1Indicator').classList.remove('text-[#38201D]', 'border-b-2', 'border-[#C5A059]');
            document.getElementById('step2Indicator').classList.add('text-[#38201D]', 'border-b-2', 'border-[#C5A059]');
            const total = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
            document.getElementById('summaryItemsList2').innerHTML = cart.map(i => `<div class="flex justify-between"><span>${i.name} ${i.qty > 1 ? `(${i.qty}x)` : ''}</span><span>R$ ${(i.price * i.qty).toFixed(2).replace('.', ',')}</span></div>`).join('');
            document.getElementById('summaryTotal2').innerText = `R$ ${total.toFixed(2).replace('.', ',')}`;
        }



        function goToCheckoutStep1() {
            document.getElementById('checkoutStep2').classList.add('hidden');
            document.getElementById('checkoutStep1').classList.remove('hidden');
            document.getElementById('step2Indicator').classList.remove('text-[#38201D]', 'border-b-2', 'border-[#C5A059]');
            document.getElementById('step1Indicator').classList.add('text-[#38201D]', 'border-b-2', 'border-[#C5A059]');
        }



        const orderField = id => document.getElementById(id);


        function hasNatalOrder() {
            return cart.some(item => item.collection === 'natal2026' || item.details?.startsWith('Coleção Natal 2026 (#'));
        }


        function natalOrdersOpen() {
            if (Date.now() < Date.parse('2026-12-23T00:00:00-03:00')) return true;
            showToast('As encomendas de Natal encerraram em 22/12/2026.');
            return false;
        }


        function natalAmounts() {
            const total = cart.reduce((sum, item) => sum + Math.round(item.price * 100) * item.qty, 0);
            const deposit = Math.round(total / 2);
            const format = cents => (cents / 100).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
            return {total: format(total), deposit: format(deposit), balance: format(total - deposit)};
        }


        function updateNatalFields() {
            const mode = orderField('natalMode').value;
            const delivery = mode && mode !== 'retirada';
            orderField('natalAddressLabel').hidden = !delivery;
            orderField('natalAddress').required = Boolean(delivery);
            orderField('natalReceivingTerms').textContent = delivery
                ? 'Você solicita o carro pelo aplicativo escolhido e paga o saldo antes do despacho.'
                : mode ? 'Retirada com horário agendado no ateliê em Belford Roxo, com tolerância de 15 minutos. O saldo é pago na retirada.' : '';
            orderField('natalTime').disabled = !orderField('natalDay').value;
            orderField('natalTime').max = orderField('natalDay').value === '23' ? '19:00' : '16:00';
            const amounts = natalAmounts();
            orderField('natalAmounts').textContent = 'Para reservar, pague o sinal de ' + amounts.deposit + ' (50%). Saldo restante: ' + amounts.balance + '.';
            orderField('natalAccept').checked = false;
        }


        function natalSummary() {
            const value = id => orderField(id).value.trim();
            const pickup = value('natalMode') === 'retirada';
            const amounts = natalAmounts();
            return [
                'Recebimento: ' + (pickup ? 'Retirada no ateliê em Belford Roxo (tolerância de 15 minutos)' : value('natalMode') + ' — Carro solicitado pelo cliente'),
                ...(pickup ? [] : ['Endereço: ' + value('natalAddress')]),
                'Horário solicitado: ' + value('natalDay') + '/12/2026 às ' + value('natalTime'),
                'Total: ' + amounts.total,
                'Sinal de 50%: ' + amounts.deposit + ' via ' + value('natalPay'),
                'Saldo: ' + amounts.balance + (pickup ? ' na retirada' : ' antes do despacho'),
                'Condições aceitas. Reserva sujeita à disponibilidade e ao pagamento do sinal.'
            ].join('\n');
        }

function initNatalOnly() {
    restoreCartFromStorage();
    renderNatalCatalog('all');
    updateCartBadge();
}
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNatalOnly, { once: true });
} else {
    initNatalOnly();
}
