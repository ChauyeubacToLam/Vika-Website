// 1. Khai báo biến toàn cục
let currentSlide = 0;
let slideInterval;

// 2. Hàm cập nhật Slider (Di chuyển ảnh và đổi màu chấm)
function updateSlider() {
    const slider = document.getElementById('banner-slider');
    const dots = document.querySelectorAll('.banner-dot');
    
    if (!slider) return;

    // Di chuyển slide
    slider.style.transform = `translateX(-${currentSlide * 25}%)`;

    // Cập nhật màu chấm tròn (Chấm đang chọn thì trắng rõ, còn lại thì mờ)
    dots.forEach((dot, index) => {
        if (index === currentSlide) {
            dot.classList.remove('bg-white/50');
            dot.classList.add('bg-white');
        } else {
            dot.classList.remove('bg-white');
            dot.classList.add('bg-white/50');
        }
    });
}

// 3. Hàm xử lý khi bấm vào chấm tròn (Quan trọng nhất)
window.goToSlide = function(index) {
    currentSlide = index;
    updateSlider();
    resetAutoSlide(); // Bấm vào thì reset lại thời gian chờ để không bị nhảy slide ngay lập tức
};

// 4. Hàm tự động chạy
function startAutoSlide() {
    slideInterval = setInterval(() => {
        currentSlide = (currentSlide + 1) % 4;
        updateSlider();
    }, 3000); // 3 giây đổi một lần
}

function resetAutoSlide() {
    clearInterval(slideInterval);
    startAutoSlide();
}

// 5. Kích hoạt khi trang web tải xong
document.addEventListener('DOMContentLoaded', () => {
    updateSlider();
    startAutoSlide();
});
