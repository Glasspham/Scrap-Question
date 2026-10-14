// ==UserScript==
// @name         UTH - Xuất câu hỏi và đáp án
// @namespace    uth-quiz-export
// @version      1.3.1
// @icon         data:image/png;base64,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
// @description  Tự thu thập các trang xem lại Moodle và xuất TXT/Word/JSON.
// @match        https://courses.ut.edu.vn/mod/quiz/review.php*
// @match        https://courses.ut.edu.vn/mod/quiz/attempt.php*
// @run-at       document-idle
// @noframes
// @grant        GM_getValue
// @grant        GM_setValue
// ==/UserScript==

(function() {
    'use strict';

    const current = new URL(location.href);
    const attempt = current.searchParams.get('attempt');
    if (!attempt || !document.querySelector('.que .qtext')) return;
    const isAttempt = current.pathname.endsWith('/attempt.php');
    // Giữ khóa cũ để tiếp tục dữ liệu đã thu thập; tách riêng hai loại trang.
    const KEY = isAttempt ? `uth-quiz-probe-v1:${attempt}` : `uth-quiz-export-v1:${attempt}`;
    const DELAY = 700; // Khoảng nghỉ giữa các trang (ms).
    const fresh = () => ({ questions: {}, visited: [], pages: [], expected: [], complete: false, logs: [] });
    let state = GM_getValue(KEY, null) || fresh();
    if (!Array.isArray(state.logs)) state.logs = [];
    let running = false;
    let stopped = false;
    let controller;
    const title = (document.querySelector('h1')?.textContent || document.title || 'Bài xem lại').trim();
    const save = () => GM_setValue(KEY, state);
    function addLog(message, level = 'info') {
        const text = String(message || '').trim();
        if (!text) return;
        const last = state.logs[state.logs.length - 1];
        if (last?.message === text && last?.level === level) return;
        state.logs.push({ time: new Date().toISOString(), level, message: text });
        if (state.logs.length > 250) state.logs.splice(0, state.logs.length - 250);
        save();
        renderLogs();
    }
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
    const cleanAnswer = value => String(value || '').replace(/^\s*The correct answers? (?:is|are):\s*/i, '').trim();
    const escape = value => String(value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

    // DOMParser không có innerText đáng tin cậy: giữ xuống dòng từ các khối HTML.
    function readText(element) {
        if (!element) return '';
        const copy = element.cloneNode(true);
        copy.querySelectorAll('script,style,.accesshide,.sr-only,.icon,.questionflag').forEach(n => n.remove());
        copy.querySelectorAll('img').forEach(n => n.replaceWith(`[Hình: ${n.getAttribute('alt') || n.getAttribute('src') || ''}]`));
        // Không đưa dữ liệu người làm đã nhập/chọn vào tài liệu ôn tập.
        copy.querySelectorAll('input,textarea,select').forEach(n => n.replaceWith(''));
        copy.querySelectorAll('br').forEach(n => n.replaceWith('\n'));
        copy.querySelectorAll('p,div,li,tr,blockquote,h1,h2,h3,h4').forEach(n => n.append('\n'));
        copy.querySelectorAll('td,th').forEach(n => n.append('\t'));
        return copy.textContent.replace(/\u00a0/g, ' ').replace(/[ \t]+/g, ' ')
            .replace(/ *\n */g, '\n').replace(/\n{3,}/g, '\n\n').trim();
    }

    function reviewURL(href, base) {
        const url = new URL(href, base);
        if (url.origin !== current.origin || url.pathname !== current.pathname || url.searchParams.get('attempt') !== attempt) {
            throw new Error('Liên kết không thuộc bài xem lại hiện tại (có thể đã hết phiên đăng nhập).');
        }
        // Không gửi form. GET tới attempt.php vẫn có thể đổi tiến trình trên máy chủ.
        const clean = new URL(current.pathname, current.origin);
        for (const key of ['attempt', 'cmid', 'page', 'showall']) {
            if (url.searchParams.has(key)) clean.searchParams.set(key, url.searchParams.get(key));
        }
        if (clean.searchParams.get('showall') !== '1') {
            clean.searchParams.delete('showall');
            if (!clean.searchParams.has('page')) clean.searchParams.set('page', '0');
        } else clean.searchParams.delete('page');
        clean.searchParams.sort();
        return clean.href;
    }

    function discover(doc, base) {
        const pages = new Set(state.pages);
        const expected = new Set(state.expected);
        // Nút không được phép truy cập vẫn được tính, tránh báo hoàn tất khi còn câu bị khóa.
        doc.querySelectorAll('.qnbutton[id]').forEach(button => {
            const slot = button.id.match(/^quiznavbutton(\d+)$/)?.[1];
            if (slot) expected.add(slot);
        });
        doc.querySelectorAll('a.qnbutton[href], a.mod_quiz-next-nav[href], a.mod_quiz-prev-nav[href]').forEach(a => {
            let url;
            try { url = reviewURL(a.getAttribute('href'), base); } catch { return; }
            if (a.matches('.qnbutton')) {
                const number = a.id.match(/^quiznavbutton(\d+)$/)?.[1];
                if (number) expected.add(number);
                if (a.hasAttribute('data-quiz-page')) {
                    const parsed = new URL(url);
                    parsed.searchParams.delete('showall');
                    parsed.searchParams.set('page', a.getAttribute('data-quiz-page'));
                    url = reviewURL(parsed.href, base);
                }
            }
            pages.add(url);
        });
        state.pages = [...pages].sort((a, b) => Number(new URL(a).searchParams.get('page')) - Number(new URL(b).searchParams.get('page')));
        state.expected = [...expected];
    }

    function extract(doc, base) {
        return Array.from(doc.querySelectorAll('.que')).filter(q => q.querySelector('.qtext')).map(q => {
            // Moodle dùng slot trong quiznavbutton và id question; số hiển thị có thể khác slot.
            const slot = q.id.match(/-(\d+)$/)?.[1];
            const number = readText(q.querySelector('.qno')) || slot;
            if (!slot) throw new Error('Không xác định được mã câu hỏi.');
            const options = Array.from(q.querySelectorAll('.answer .r0, .answer .r1')).map(row => ({
                text: readText(row.querySelector('[data-region="answer-label"], label') || row),
                markedCorrect: row.classList.contains('correct')
            }));
            const correct = cleanAnswer(readText(q.querySelector('.rightanswer')));
            const marked = options.filter(o => o.markedCorrect).map(o => o.text);
            const images = Array.from(q.querySelectorAll('.qtext img, .answer img:not(.icon), .rightanswer img')).map(img => {
                try { return new URL(img.getAttribute('src'), base).href; } catch { return ''; }
            }).filter(Boolean);
            return {
                id: q.id, slot, number, question: readText(q.querySelector('.qtext')), options,
                correctAnswer: correct || (marked.length ? `Lựa chọn được trang đánh dấu đúng (có thể chưa đầy đủ):\n${marked.join('\n')}` : 'Trang không hiển thị đáp án đúng.'),
                feedback: readText(q.querySelector('.specificfeedback')),
                generalFeedback: readText(q.querySelector('.generalfeedback')),
                images, source: base
            };
        });
    }

    function ingest(doc, base) {
        const before = Object.keys(state.questions).length;
        const questions = extract(doc, base);
        if (!questions.length) throw new Error('Không tìm thấy câu hỏi. Kiểm tra phiên đăng nhập hoặc quyền xem lại.');
        const nav = Array.from(doc.querySelectorAll('.qnbutton.thispage[id]')).map(a => a.id.replace('quiznavbutton', ''));
        const slots = new Set(questions.map(q => q.slot));
        if (nav.some(n => !slots.has(n))) throw new Error('Trang trả về thiếu câu hỏi so với thanh điều hướng.');
        discover(doc, base);
        questions.forEach(q => { state.questions[q.slot] = q; });
        if (!state.visited.includes(base)) state.visited.push(base);
        save();
        const added = Object.keys(state.questions).length - before;
        addLog(`Đã đọc trang ${Number(new URL(base).searchParams.get('page') || 0) + 1}: thêm ${added} câu, tổng ${Object.keys(state.questions).length} câu.`, 'success');
    }

    const host = document.createElement('div');
    host.id = 'uth-quiz-export';
    const ui = host.attachShadow({ mode: 'open' });
    ui.innerHTML = `<style>
        :host{position:fixed;right:20px;top:20px;bottom:auto;z-index:2147483647;width:min(360px,calc(100vw - 40px));font:14px/1.5 "Segoe UI",Arial,sans-serif;color:#1e293b;color-scheme:light}
        :host{pointer-events:none}
        *{box-sizing:border-box}[hidden]{display:none!important}
        section,.launcher{pointer-events:auto}
        section{background:#fff;border:1px solid #dbe5ed;border-radius:20px;overflow:auto;max-height:calc(100dvh - 40px);box-shadow:0 16px 48px #02061740,0 2px 8px #0206171a}
        header{display:flex;align-items:center;gap:12px;padding:20px;background:linear-gradient(120deg,#102d3b,#174f59);color:#fff;border-bottom:1px solid #ffffff15}
        .logo{display:grid;place-items:center;width:42px;height:46px;flex-shrink:0;background:#ffffff12;border:1px solid #ffffff30;border-radius:12px;color:#99f6e4}
        .logo svg{width:24px;height:24px}strong{display:block;font-size:17px;font-weight:650;letter-spacing:-.3px}
        .subtitle{display:block;font-size:12px;color:#b9d9df;margin-top:2px}.body{padding:18px 20px 20px}
        .progress-heading{display:flex;justify-content:space-between;align-items:center;font-size:12px;font-weight:600;color:#526477;margin-bottom:8px}
        .percent{background:#e6f5f1;color:#116651;border:1px solid #cae9de;border-radius:7px;padding:2px 7px;font-variant-numeric:tabular-nums}
        progress{display:block;appearance:none;width:100%;height:8px;border:0;border-radius:8px;overflow:hidden;background:#e8eef2;accent-color:#16836c}
        progress::-webkit-progress-bar{background:#e8eef2;border-radius:8px}progress::-webkit-progress-value{background:linear-gradient(90deg,#16836c,#39b69a);border-radius:8px}
        progress::-moz-progress-bar{background:#16836c;border-radius:8px}
        p{font-size:13px;line-height:1.6;margin:12px 0 16px;overflow-wrap:anywhere;color:#475569}
        .controls{display:grid;grid-template-columns:1fr 1fr;gap:8px}.exports{display:grid;grid-template-columns:1fr 1fr;gap:8px}
        button{font:inherit;font-size:13px;font-weight:600;cursor:pointer;border:1px solid #d9e3eb;border-radius:10px;padding:10px 12px;background:#f7f9fb;color:#334155;transition:background .15s,border-color .15s,box-shadow .15s}
        button:hover:not(:disabled){background:#eef4f6;border-color:#9cafbf;box-shadow:0 2px 5px #0f172a0d}
        button:focus-visible{outline:3px solid #38bdf8;outline-offset:2px}button:active:not(:disabled){background:#e3edf1}
        button:disabled{opacity:.45;cursor:default}.export-label{margin:20px 0 9px;font-size:11px;font-weight:700;letter-spacing:1px;color:#64748b}
        .launcher{display:flex;align-items:center;gap:8px;margin-left:auto;background:#137460;color:#fff;border:1px solid #ffffff35;border-radius:999px;padding:11px 16px;box-shadow:0 4px 16px #02061730}
        .launcher:hover:not(:disabled){background:#0e5e4d;border-color:#57b69c}.launcher svg{width:18px;height:18px}
        .close{align-self:flex-start;flex-shrink:0;margin-left:auto;padding:0;width:28px;height:28px;font-size:21px;line-height:1;background:#ffffff12;border-color:#ffffff25;color:#fff}
        .close:hover:not(:disabled){background:#ffffff25;border-color:#ffffff60}
        [data-action="doc"]{background:#137460;color:#fff;border-color:#137460}[data-action="doc"]:hover:not(:disabled){background:#0e5e4d;border-color:#0e5e4d}
        [data-action="txt"]{background:#edf8f4;border-color:#c4e6d9;color:#16634e}
        .footer{display:flex;justify-content:space-between;gap:8px;margin-top:9px}.footer button{padding:6px 9px;font-size:12px;background:transparent;border-color:transparent;color:#64748b}
        small{display:block;margin-top:14px;padding-top:12px;border-top:1px solid #edf1f5;font-size:11px;line-height:1.6;color:#64748b}
        .scan-warning{margin:14px 0;padding:12px;border:1px solid #f1d293;border-radius:10px;background:#fff8e8;color:#854d0e;font-size:12px;line-height:1.6}
        details.logs{margin-top:16px;border:1px solid #dbe5ed;border-radius:11px;background:#f8fafc}details.logs summary{cursor:pointer;display:flex;align-items:center;justify-content:space-between;padding:10px 12px;font-size:11px;font-weight:750;letter-spacing:.7px;color:#526477;list-style:none}details.logs summary::-webkit-details-marker{display:none}.log-count{font-variant-numeric:tabular-nums;background:#e6f5f1;color:#116651;border-radius:999px;padding:1px 7px}.log-list{max-height:170px;overflow:auto;border-top:1px solid #e3eaf0;padding:8px 10px;background:#fff;font:11px/1.55 ui-monospace,SFMono-Regular,Consolas,monospace}.log-empty{color:#8492a1}.log-row{display:grid;grid-template-columns:auto auto minmax(0,1fr);gap:6px;padding:3px 0;color:#475569}.log-time{color:#7c8a99}.log-level{font-weight:800;color:#42708a}.log-row[data-level="success"] .log-level{color:#16836c}.log-row[data-level="warning"] .log-level{color:#a16207}.log-row[data-level="error"] .log-level{color:#b42318}.log-message{overflow-wrap:anywhere;white-space:pre-wrap}.log-actions{display:flex;gap:6px;padding:8px;border-top:1px solid #e3eaf0}.log-actions button{flex:1;padding:6px 8px;font-size:11px}
        @media(max-width:480px){:host{top:12px;right:12px;width:calc(100vw - 24px)}section{max-height:calc(100dvh - 24px)}header{padding:16px}.body{padding:16px}}
        @media(prefers-reduced-motion:reduce){button{transition:none}}
    </style><button class="launcher" data-action="open" aria-expanded="false" aria-controls="export-panel" title="Mở bảng xuất câu hỏi">
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12m-5-5 5 5 5-5M5 16v5h14v-5"/></svg>Xuất câu hỏi</button>
    <section id="export-panel" aria-label="Bảng xuất câu hỏi UTH" hidden>
    <header><span class="logo" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6M8 13h8M8 17h5"/></svg></span>
    <div><strong>Xuất câu hỏi UTH</strong><span class="subtitle">Gom câu hỏi · Lưu để ôn tập</span></div>
    <button class="close" data-action="close" aria-label="Ẩn bảng xuất câu hỏi" title="Ẩn bảng (Esc). Tiến trình đang chạy vẫn tiếp tục.">×</button></header>
    <div class="body"><div class="progress-heading"><span>Tiến độ thu thập</span><span class="percent">0%</span></div>
    <progress aria-label="Tiến độ thu thập câu hỏi"></progress><p role="status" aria-live="polite"></p>
    <div class="scan-warning" ${isAttempt ? '' : 'hidden'}>Cẩn thận: quét toàn bộ sẽ tải lần lượt các trang bằng phiên đăng nhập hiện tại. Trên bài đang làm, thao tác này có thể đẩy tiến trình và khiến bạn không quay lại được. Tool không vượt được quy định khóa câu của hệ thống.</div>
    <div class="controls"><button data-action="resume">Quét toàn bộ</button><button data-action="pause">Tạm dừng</button></div>
    <details class="logs"><summary>NHẬT KÝ <span class="log-count">0</span></summary><div class="log-list" aria-live="polite"></div><div class="log-actions"><button data-action="download-log">Tải nhật ký</button><button data-action="clear-log">Xóa nhật ký</button></div></details>
    <div class="export-label">TẢI TÀI LIỆU</div><div class="exports"><button data-action="txt">Tải TXT</button><button data-action="doc">Tải Word (.doc)</button></div>
    <div class="footer"><button data-action="json">Tải JSON</button><button data-action="reset">↻ Quét lại</button></div>
    <small>Quét xong, chọn TXT, Word hoặc JSON để tải về. Word là HTML tương thích .doc, không phải .docx. Hình ảnh lưu dưới dạng liên kết.</small>
    <div style="text-align:center"><a href="https://github.com/Glasspham" target="_blank" rel="noopener noreferrer">Glasspham</a></div></div></section>`;
    document.body.append(host);

    function setPanelOpen(open) {
        const launcher = ui.querySelector('[data-action="open"]');
        ui.querySelector('#export-panel').hidden = !open;
        launcher.hidden = open;
        launcher.setAttribute('aria-expanded', String(open));
        (open ? ui.querySelector('[data-action="close"]') : launcher).focus();
        // Chỉ mở bảng; người dùng nhấn quét và đọc cảnh báo trước request đầu tiên.
    }

    function renderLogs() {
        const list = ui?.querySelector?.('.log-list');
        if (!list) return;
        const visible = state.logs.slice(-100);
        list.replaceChildren(...(visible.length ? visible.map(entry => {
            const row = document.createElement('div');
            row.className = 'log-row';
            row.dataset.level = entry.level || 'info';
            const time = document.createElement('span');
            time.className = 'log-time';
            time.textContent = new Date(entry.time).toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
            const level = document.createElement('span');
            level.className = 'log-level';
            level.textContent = ({ success: 'OK', warning: 'CHÚ Ý', error: 'LỖI' })[entry.level] || 'INFO';
            const message = document.createElement('span');
            message.className = 'log-message';
            message.textContent = entry.message;
            row.append(time, level, message);
            return row;
        }) : [Object.assign(document.createElement('div'), { className: 'log-empty', textContent: 'Chưa có sự kiện.' })]));
        ui.querySelector('.log-count').textContent = String(state.logs.length);
        ui.querySelector('[data-action="download-log"]').disabled = !state.logs.length;
        ui.querySelector('[data-action="clear-log"]').disabled = !state.logs.length || running;
        list.scrollTop = list.scrollHeight;
    }

    function update(message, level = 'info') {
        addLog(message, level);
        const count = Object.keys(state.questions).length;
        ui.querySelector('[role="status"]').textContent = `${count}/${state.expected.length || '?'} câu. ${message}`;
        const progress = ui.querySelector('progress');
        progress.max = state.expected.length || Math.max(count, 1);
        progress.value = count;
        ui.querySelector('.percent').textContent = state.expected.length
            ? `${Math.min(100, Math.round(count / state.expected.length * 100))}%` : '…';
        ui.querySelector('[data-action="resume"]').disabled = running || state.complete;
        ui.querySelector('[data-action="resume"]').textContent = Object.keys(state.questions).length && !state.complete ? 'Tiếp tục quét' : 'Quét toàn bộ';
        ui.querySelector('[data-action="pause"]').disabled = !running;
        ui.querySelector('[data-action="reset"]').disabled = running;
        for (const type of ['txt', 'doc', 'json']) ui.querySelector(`[data-action="${type}"]`).disabled = !count;
        renderLogs();
    }

    function downloadLog() {
        if (!state.logs.length) return;
        const content = [
            `UTH Quiz Export · Lượt làm ${attempt}`,
            `Trang: ${location.href}`,
            '',
            ...state.logs.map(entry => `${new Date(entry.time).toLocaleString('vi-VN')} [${String(entry.level || 'info').toUpperCase()}] ${entry.message}`)
        ].join('\n');
        const url = URL.createObjectURL(new Blob(['\uFEFF', content], { type: 'text/plain;charset=utf-8' }));
        const link = document.createElement('a');
        link.href = url;
        link.download = `UTH-${attempt}-nhat-ky.txt`;
        document.body.append(link);
        link.click();
        link.remove();
        setTimeout(() => URL.revokeObjectURL(url), 60000);
        addLog(`Đã tạo file ${format.toUpperCase()} với ${questions.length} câu.`, 'success');
        addLog('Đã tạo file nhật ký TXT.', 'success');
    }

    function labelCorrectAnswer(answer, options) {
        if (current.pathname !== '/mod/quiz/review.php') return answer;
        // Chỉ chuẩn hóa Unicode/khoảng trắng, không bỏ dấu, từ hay dấu câu.
        const normalize = value => String(value || '').normalize('NFC').replace(/\s+/g, ' ').trim();
        const target = normalize(answer);
        const choices = options.map(option => {
            const match = String(option.text || '').match(/^\s*([a-d])\.\s+([\s\S]+)$/i);
            return match ? { label: match[1].toLowerCase(), text: normalize(match[2]), full: normalize(option.text) } : null;
        }).filter(Boolean);
        // Không thêm nhãn lần nữa nếu đáp án đã có nhãn khớp lựa chọn.
        if (choices.some(choice => choice.full === target)) return answer;
        const matches = choices.filter(choice => choice.text === target);
        return matches.length === 1 ? `${matches[0].label}. ${answer}` : answer;
    }

    function exportFile(format) {
        // Chỉ bỏ dòng phân cách độc lập; giữ dấu _ và = trong nội dung/công thức.
        const compact = value => String(value || '').split(/\r?\n/).map(line => line.trim())
            .filter(line => line && !/^(?:_+|=+)$/.test(line)).join('\n');
        const singleLine = value => compact(value).replace(/\n/g, ' ');
        // Làm sạch cả dữ liệu đã lưu từ phiên bản cũ, không cần quét lại.
        // Slot dùng để định danh/chống trùng, không phải thứ tự hiển thị trong đề.
        // Sắp xếp khi xuất để cả dữ liệu đã lưu từ bản cũ cũng được sửa thứ tự.
        const questions = Object.values(state.questions).map(({ result, response, ...q }) => ({
            ...q, question: singleLine(q.question),
            options: q.options.map(o => ({ text: singleLine(o.text) })),
            correctAnswer: compact(cleanAnswer(q.correctAnswer))
        })).map(q => {
            if (isAttempt) {
                const { correctAnswer, ...question } = q;
                return question; // Không xuất đáp án, kể cả dữ liệu cũ, trên trang làm bài.
            }
            return { ...q, correctAnswer: labelCorrectAnswer(q.correctAnswer, q.options) };
        })
        .sort((a, b) => String(a.number || a.slot).localeCompare(
            String(b.number || b.slot), 'vi', { numeric: true }
        ) || Number(a.slot) - Number(b.slot));
        if (!questions.length) return;
        const header = `${title}\nLượt làm: ${attempt}\nĐã thu thập: ${questions.length}/${state.expected.length || '?'} câu\nTrạng thái: ${state.complete ? 'Hoàn tất' : 'CHƯA HOÀN TẤT'}\nNguồn: ${reviewURL(current.href, current.href)}`;
        const blocks = questions.map(q => [
            `Câu hỏi ${q.number} ${q.question}`, ...q.options.map(o => o.text),
            !isAttempt && q.correctAnswer && `Đáp án: ${q.correctAnswer}`,
            q.feedback && `Phản hồi: ${q.feedback}`,
            q.generalFeedback && `Giải thích: ${q.generalFeedback}`,
            q.images.length && `Hình ảnh (liên kết):\n${q.images.join('\n')}`
        ].filter(Boolean).map(compact).filter(Boolean).join('\n'));
        let content = `${compact(header)}\n${blocks.join('\n\n')}`;
        let mime = 'text/plain;charset=utf-8';
        if (format === 'doc') {
            mime = 'application/msword;charset=utf-8';
            content = `<!DOCTYPE html><html lang="vi"><head><meta charset="utf-8"><title>${escape(title)}</title>
                <style>body{font-family:Calibri,Arial,sans-serif;font-size:12pt}p{margin:0;white-space:pre-wrap}h2{color:#17477e;font-size:12pt;margin:0}section{margin:0}section+section{margin-top:12pt}</style></head>
                <body><p>${escape(compact(header)).replace(/\n/g, '<br>')}</p>${blocks.map(b => {
                    const [heading, ...lines] = b.split('\n');
                    return `<section><h2>${escape(heading)}</h2><p>${lines.map(escape).join('<br>')}</p></section>`;
                }).join('')}</body></html>`;
        } else if (format === 'json') {
            mime = 'application/json;charset=utf-8';
            content = JSON.stringify({ title, attempt, complete: state.complete, expected: state.expected.length, questions }, null, 2);
        }
        const blob = new Blob([format === 'json' ? '' : '\uFEFF', content], { type: mime });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `UTH-${attempt}-${questions.length}-cau${state.complete ? '' : '-chua-du'}.${format}`;
        document.body.append(link);
        link.click();
        link.remove();
        setTimeout(() => URL.revokeObjectURL(url), 60000);
    }

    async function loadPage(url) {
        // Không gọi nhầm attempt.php từ danh sách trang lưu bởi phiên bản cũ.
        url = reviewURL(url, current.href);
        const maxTries = isAttempt ? 1 : 3;
        for (let retry = 0; retry < maxTries; retry++) {
            if (stopped) throw new Error('Đã tạm dừng.');
            controller = new AbortController();
            const timeout = setTimeout(() => controller.abort(), 30000);
            try {
                const response = await fetch(url, { credentials: 'same-origin', signal: controller.signal, redirect: 'manual' });
                if (response.type === 'opaqueredirect' || (response.status >= 300 && response.status < 400)) {
                    const error = new Error('Máy chủ chuyển hướng hoặc hạn chế truy cập. Đã dừng quét.');
                    error.stopScan = true;
                    throw error;
                }
                if (!response.ok) throw new Error(`HTTP ${response.status}`);
                reviewURL(response.url, url);
                const doc = new DOMParser().parseFromString(await response.text(), 'text/html');
                if (!doc.querySelector('.que .qtext')) throw new Error('Không có câu hỏi; kiểm tra phiên đăng nhập/quyền xem lại.');
                if ((new URL(url).searchParams.get('page') || '0') !== (new URL(response.url).searchParams.get('page') || '0')) {
                    throw new Error('Máy chủ chuyển hướng sang trang câu hỏi khác.');
                }
                return doc;
            } catch (error) {
                if (stopped || error.stopScan || retry === maxTries - 1) throw error;
                update(`Tải lỗi; thử lại lần ${retry + 1}/2…`, 'warning');
                await sleep(1500 * (retry + 1));
            } finally { clearTimeout(timeout); }
        }
    }

    async function run(reset = false) {
        if (running || (state.complete && !reset)) return;
        const accepted = !isAttempt || window.confirm(
            'CẨN THẬN TRƯỚC KHI QUÉT TOÀN BỘ\n\n' +
            'Script sẽ tải các trang bằng phiên đăng nhập của bạn. Trên attempt.php, GET có thể làm mất quyền quay lại câu trước; tạm dừng không hoàn tác request đã gửi.\n\n' +
            'Quét toàn bộ không khắc phục được chế độ khóa câu/không cho quay lại.\n\n' +
            (reset ? 'Quét lại sẽ thay thế dữ liệu đã lưu của trang/lượt làm này.\n\n' : '') +
            'Bạn muốn bắt đầu quét không?'
        );
        if (!accepted) { update('Chưa bắt đầu quét. Bạn vẫn có thể tải dữ liệu đã lưu.', 'warning'); return; }
        if (reset) { state = fresh(); save(); addLog('Đã xóa dữ liệu cũ và bắt đầu quét lại.', 'warning'); }
        running = true;
        stopped = false;
        try {
            ingest(document, reviewURL(current.href, current.href));
            update('Đang thu thập tự động…');
            while (!stopped) {
                const next = state.pages.find(url => !state.visited.includes(url));
                if (!next) break;
                if (state.expected.length && state.expected.every(n => state.questions[n])) break;
                update(`Đang tải trang ${Number(new URL(next).searchParams.get('page') || 0) + 1}…`);
                await sleep(DELAY);
                if (stopped) break;
                const doc = await loadPage(next);
                if (stopped) break;
                ingest(doc, next);
            }
            if (stopped) { update('Đã tạm dừng; có thể tải phần đã thu thập.', 'warning'); return; }
            const missing = state.expected.filter(n => !state.questions[n]);
            if (missing.length) {
                state.visited = [];
                save();
                throw new Error(`Còn thiếu câu (mã) ${missing.join(', ')}.`);
            }
            state.complete = true;
            save();
            update('Hoàn tất. Dữ liệu đã lưu. Chọn Tải TXT, Tải Word hoặc Tải JSON để tải về.', 'success');
        } catch (error) {
            update(stopped ? 'Đã tạm dừng.' : `Đã dừng: ${error.message} Nhấn Tiếp tục để thử lại.`, stopped ? 'warning' : 'error');
        } finally {
            running = false;
            controller = null;
            ui.querySelector('[data-action="resume"]').disabled = state.complete;
            ui.querySelector('[data-action="pause"]').disabled = true;
            ui.querySelector('[data-action="reset"]').disabled = false;
            renderLogs();
        }
    }

    ui.addEventListener('click', event => {
        const action = event.target.closest('button')?.dataset.action;
        if (action === 'open') setPanelOpen(true);
        if (action === 'close') setPanelOpen(false);
        if (['txt', 'doc', 'json'].includes(action)) exportFile(action);
        if (action === 'download-log') downloadLog();
        if (action === 'clear-log' && !running) { state.logs = []; save(); renderLogs(); }
        if (action === 'pause') { stopped = true; controller?.abort(); update('Đang tạm dừng…', 'warning'); }
        if (action === 'resume') void run();
        if (action === 'reset') void run(true);
    });
    ui.addEventListener('keydown', event => {
        if (event.key === 'Escape' && !ui.querySelector('#export-panel').hidden) {
            event.preventDefault();
            event.stopPropagation();
            setPanelOpen(false);
        }
    });
    update(state.complete ? 'Đã thu thập xong từ trước. Chọn định dạng để tải, hoặc Quét lại.' : 'Nhấn Quét toàn bộ để bắt đầu sau khi đọc cảnh báo.');
})();
