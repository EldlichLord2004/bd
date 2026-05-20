import React, { useState } from 'react';

const BirthdayCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 to-purple-200 p-4">
      <div className="relative w-80 h-96 perspective-1000 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <div className="absolute inset-0 pointer-events-none z-20">
          <video className="corner-video corner-top-left" src="/bird.webm" autoPlay muted loop playsInline preload="auto" />
          <video className="corner-video corner-top-right" src="/bird.webm" autoPlay muted loop playsInline preload="auto" />
          <video className="corner-video corner-bottom-left" src="/bird.webm" autoPlay muted loop playsInline preload="auto" />
          <video className="corner-video corner-bottom-right" src="/bird.webm" autoPlay muted loop playsInline preload="auto" />
        </div>
        <div className={`relative w-full h-full duration-1000 preserve-3d ${isOpen ? 'rotate-y-180' : ''}`}>
          
          {/* Mặt trước */}
          <div className="absolute inset-0 w-full h-full rounded-2xl shadow-xl bg-gradient-to-br from-pink-500 to-rose-400 flex flex-col items-center justify-center backface-hidden z-10 p-6 border-4 border-white border-opacity-30">
            <div className="animate-float text-6xl mb-4">🎁</div>
            <h1 className="text-3xl font-extrabold text-white text-center tracking-wide drop-shadow-md">
              Happy Birthday!
            </h1>
            <p className="text-pink-100 mt-2 text-sm font-medium">Click để mở thiệp</p>
            {/* <div className="absolute top-4 left-4 text-2xl opacity-60">🎈</div>
            <div className="absolute bottom-4 right-4 text-2xl opacity-60">🎈</div> */}
          </div>

          {/* Mặt trong */}
          <div className="absolute inset-0 w-full h-full rounded-2xl shadow-xl bg-white flex flex-col items-center justify-between p-8 rotate-y-180 backface-hidden border-2 border-pink-100">
            <div className="text-center">
              <span className="text-4xl">🎉</span>
              <h2 className="text-2xl font-bold text-gray-800 mt-2">Chúc Mừng Sinh Nhật!</h2>
            </div>
            <div className="text-center text-gray-600 space-y-2 text-sm leading-relaxed">
              <p>Chúc bạn tuổi mới luôn ngập tràn niềm vui, nhiều sức khỏe và gặt hái được nhiều thành công mới.</p>
              <p className="font-semibold text-pink-500">Mọi điều tốt đẹp nhất sẽ đến với bạn!</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-gray-400">Từ người gửi với sự trân trọng</p>
              <div className="mt-2 text-xl">🎂 ✨ ❤️</div>
            </div>
          </div>

        </div>
      </div>

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="mt-8 px-6 py-2 bg-pink-500 text-white font-medium rounded-full shadow-md hover:bg-pink-600 transition-colors duration-300"
      >
        {isOpen ? 'Đóng thiệp' : 'Mở thiệp'}
      </button>
    </div>
  );
};

export default BirthdayCard;