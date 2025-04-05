const Raiki = () => {
  return (
    <div className="bg-red-500 text-white min-h-screen flex items-center justify-center">
      <div className="relative w-full h-full flex flex-col sm:flex-row sm:items-center sm:justify-between">
        {/* アイコンを中央に配置（スマホ用、PC用） */}
        <img 
          src="https://cdn.discordapp.com/attachments/1358047656001147061/1358192680630489238/IMG_2010.png?ex=67f2f301&is=67f1a181&hm=67c454f3d2d07de8cd683fe445037e5541e8c8e87b77e131636f91df6952bf14&" 
          alt="夜宮らいき" 
          className="rounded-full w-40 h-40 sm:w-48 sm:h-48 mx-auto sm:mx-0 sm:mr-6" 
        />
        
        {/* 自己紹介を右上（スマホで縦、PCで横並び） */}
        <div className="absolute sm:static top-4 right-4 sm:top-auto sm:right-auto sm:p-4 bg-black bg-opacity-50 text-white rounded-lg w-2/3 sm:w-1/3">
          <p className="font-bold text-sm sm:text-base">名前：夜宮らいき</p>
          <p className="text-xs sm:text-sm">年齢：20</p>
          <p className="text-xs sm:text-sm">性別：男</p>
          <p className="text-xs sm:text-sm">意気込み：人生の良き思い出の残る場所を作ろう！</p>
        </div>
      </div>
    </div>
  );
};

export default Raiki;
