const Vigorousmoon = () => {
  return (
    <div className="bg-green-500 text-white min-h-screen flex items-center justify-center">
      <div className="w-full h-full flex flex-col sm:flex-row sm:items-center sm:justify-between">
        {/* アイコン */}
        <img 
          src="https://cdn.discordapp.com/attachments/1358047656001147061/1358248697133006998/7aaf964f68edb6323a47848038f1c6b5.png?ex=67f3272c&is=67f1d5ac&hm=53fe5ffb4f7beeb15ad50308d6f1f81c2ac0481121de6704b27ff8d780dec2ca&" 
          alt="Vigorousmoon474" 
          className="rounded-full w-40 h-40 sm:w-96 sm:h-96 mx-auto sm:mx-0 sm:mr-6 mb-4 sm:mb-0" 
        />
        
        {/* 自己紹介 */}
        <div className="text-white bg-black bg-opacity-50 p-4 rounded-lg w-full sm:w-2/3">
          <p className="font-bold text-lg sm:text-2xl mb-2">名前：Vigorousmoon474（ゾンビ）</p>
          <p className="text-sm sm:text-xl mb-2">年齢：16</p>
          <p className="text-sm sm:text-xl mb-2">性別：男</p>
          <p className="text-sm sm:text-xl mb-2">意気込み：全員が楽しく交流できるサーバーにする</p>
        </div>
      </div>
    </div>
  );
};

export default Vigorousmoon;
