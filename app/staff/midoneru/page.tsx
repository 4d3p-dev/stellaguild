const Midoneru = () => {
  return (
    <div className="bg-red-500 text-white min-h-screen flex items-center justify-center">
      <div className="w-full h-full flex flex-col sm:flex-row sm:items-center sm:justify-between">
        {/* アイコンを上部に固定（スマホではアイコンを上部、PCでは横並びに大きく表示） */}
        <img 
          src="https://cdn.discordapp.com/attachments/1358047656001147061/1358216448211685406/5a3696497437f1f93de38c4db2ed5224.png?ex=67f30923&is=67f1b7a3&hm=f08bafac85142d684dbee5ab55ef3d277feb1a94558779016123899c64a2b2fe&" 
          alt="みどねる" 
          className="rounded-full w-40 h-40 sm:w-96 sm:h-96 mx-auto sm:mx-0 sm:mr-6 mb-4 sm:mb-0" 
        />
        
        {/* 自己紹介をアイコンの下に配置（スマホでは縦、PCでは横並びに） */}
        <div className="text-white bg-black bg-opacity-50 p-4 rounded-lg w-full sm:w-2/3">
          <p className="font-bold text-lg sm:text-2xl mb-2">名前：みどねる</p>
          <p className="text-sm sm:text-xl mb-2">年齢：16</p>
          <p className="text-sm sm:text-xl mb-2">性別：男</p>
          <p className="text-sm sm:text-xl mb-2">意気込み：雑談界隈で一番大きいサーバーにする</p>
          
          {/* Unicode (U+1D54F) をボタンにする */}
          <a 
            href="https://x.com/@midonerujp" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white bg-blue-500 rounded-full p-4 mt-4 inline-block text-3xl hover:bg-blue-600 transition"
          >
            ℏ
          </a>
        </div>
      </div>
    </div>
  );
};

export default Midoneru;
