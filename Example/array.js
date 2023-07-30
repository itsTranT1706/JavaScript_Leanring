function render(html) {
            let target = document.querySelector("ul");
            target.innerHTML = html;
            return target;
}

// render(`
//     <li>Khóa học HTML</li>
//     <li>Khóa học JS</li>
//     <li>Khóa học PHP</li>
// `)