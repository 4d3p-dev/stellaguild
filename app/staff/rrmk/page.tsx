const Rrmk = () => {
  return (
    <div className="bg-red-500 text-white min-h-screen flex items-center justify-center">
      <div className="w-full h-full flex flex-col sm:flex-row sm:items-center sm:justify-between">
        {/* アイコン */}
        <img 
          src="https://cdn.discordapp.com/attachments/1358047656001147061/1358303424264802404/20180806014147.gif?ex=67f35a24&is=67f208a4&hm=e392bee5afab68dd04132b49ec7e7a95394610fb4944c41fac9029443c79306c&" 
          alt="rrmk" 
          className="rounded-full w-40 h-40 sm:w-96 sm:h-96 mx-auto sm:mx-0 sm:mr-6 mb-4 sm:mb-0" 
        />
        
        {/* 自己紹介 */}
        <div className="text-white bg-black bg-opacity-50 p-4 rounded-lg w-full sm:w-2/3">
          <p className="font-bold text-lg sm:text-2xl mb-2">名前：rrmk</p>
          <p className="text-sm sm:text-xl mb-2">年齢：中学生</p>
          <p className="text-sm sm:text-xl mb-2">性別：男</p>
          <p className="text-sm sm:text-xl mb-2">意気込み：さばぬんなのでがんばります</p>
        </div>
      </div>
    </div>
  );
};

export default Rrmk;
