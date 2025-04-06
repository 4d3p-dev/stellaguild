const Tiru = () => {
  return (
    <div className="bg-gradient-to-r from-pink-500 via-yellow-500 to-green-500 text-white min-h-screen flex items-center justify-center">
      <div className="w-full h-full flex flex-col sm:flex-row sm:items-center sm:justify-between">
        {/* アイコン */}
        <img 
          src="https://cdn.discordapp.com/attachments/1358047656001147061/1358313361754034275/992ef33e59d5021f0779d6324c264c65.png?ex=67f36365&is=67f211e5&hm=2242ec548fcccc5ee846d7a3333752330ab4c43baca888c24509e8d55cc92744&" 
          alt="ねこまるゆっけ" 
          className="rounded-full w-40 h-40 sm:w-96 sm:h-96 mx-auto sm:mx-0 sm:mr-6 mb-4 sm:mb-0" 
        />
        
        {/* 自己紹介 */}
        <div className="text-white bg-black bg-opacity-50 p-4 rounded-lg w-full sm:w-2/3">
          <p className="font-bold text-lg sm:text-2xl mb-2">名前：ねこまるゆっけ</p>
          <p className="text-sm sm:text-xl mb-2">年齢：13</p>
          <p className="text-sm sm:text-xl mb-2">性別：女</p>
          <p className="text-sm sm:text-xl mb-2">意気込み：そんなのありません</p>
        </div>
      </div>
    </div>
  );
};

export default Tiru;
