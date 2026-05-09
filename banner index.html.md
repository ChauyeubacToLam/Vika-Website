<!-- Banner chạy 4 hình -->
<section class="relative w-full overflow-hidden h-[400px] sm:h-[500px] lg:h-[650px] bg-gray-200">
    <div id="banner-slider" class="flex transition-transform duration-700 ease-in-out h-full w-[400%]">
        <div class="w-1/4 h-full bg-cover bg-center" style="background-image: url('banner1.jpg');"></div>
        <div class="w-1/4 h-full bg-cover bg-center" style="background-image: url('banner2.jpg');"></div>
        <div class="w-1/4 h-full bg-cover bg-center" style="background-image: url('banner3.jpg');"></div>
        <div class="w-1/4 h-full bg-cover bg-center" style="background-image: url('banner4.jpg');"></div>
    </div>

    <div class="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        <!-- Thêm transition-all và hover:bg-white để chấm sáng lên khi di chuột -->
        <button onclick="goToSlide(0)" class="banner-dot w-3 h-3 rounded-full bg-white/50 hover:bg-white transition-all duration-300"></button>
        <button onclick="goToSlide(1)" class="banner-dot w-3 h-3 rounded-full bg-white/50 hover:bg-white transition-all duration-300"></button>
        <button onclick="goToSlide(2)" class="banner-dot w-3 h-3 rounded-full bg-white/50 hover:bg-white transition-all duration-300"></button>
        <button onclick="goToSlide(3)" class="banner-dot w-3 h-3 rounded-full bg-white/50 hover:bg-white transition-all duration-300"></button>
    </div>
</section>
