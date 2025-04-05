const Raiki = () => {
  return (
    <div className="bg-red-500 text-white min-h-screen flex items-center justify-center">
      <div className="w-full h-full flex flex-col sm:flex-row sm:items-center sm:justify-between">
        {/* アイコンを上部に固定（スマホではアイコンを上部、PCでは横並びに大きく表示） */}
        <img 
          src="https://cdn.discordapp.com/attachments/1358047656001147061/1358192680630489238/IMG_2010.png?ex=67f2f301&is=67f1a181&hm=67c454f3d2d07de8cd683fe445037e5541e8c8e87b77e131636f91df6952bf14&" 
          alt="夜宮らいき" 
          className="rounded-full w-40 h-40 sm:w-96 sm:h-96 mx-auto sm:mx-0 sm:mr-6 mb-4 sm:mb-0" 
        />
        
        {/* 自己紹介をアイコンの下に配置（スマホでは縦、PCでは横並びに） */}
        <div className="text-white bg-black bg-opacity-50 p-4 rounded-lg w-full sm:w-2/3">
          <p className="font-bold text-lg sm:text-2xl mb-2">名前：夜宮らいき</p>
          <p className="text-sm sm:text-xl mb-2">年齢：20</p>
          <p className="text-sm sm:text-xl mb-2">性別：男</p>
          <p className="text-sm sm:text-xl">意気込み：人生の良き思い出の残る場所を作ろう！</p>
        </div>
      </div>
    </div>
  );
};

export default Raiki;
