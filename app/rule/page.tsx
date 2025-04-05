export default function Rule() {
  return (
    <div className="container px-4 py-12 space-y-8">
      <h1 className="text-3xl font-bold">💫星夢 - Star Guild - サーバールール</h1>

      <section>
        <h2 className="text-xl font-semibold mb-2">0. るーるをよめないおこさまたちへ</h2>
        <p className="text-muted-foreground">
          <strong>このるーるはさばのためです。<br />
          るーるをよめないこたちはおとうさんおかあさんによんでもらってね。</strong>
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">0. サーバー</h2>
        <p className="text-muted-foreground">
          <strong>本サーバーはどのサーバーの管理下にもなく独立していることを大前提とします。</strong>
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">1. 定義</h2>
        <ul className="list-disc list-inside text-muted-foreground">
          <li>
            <strong>運営：</strong>ロール「運営補佐」「Moderator」以上を所持しているユーザー
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">2. 禁止事項</h2>
        <ul className="list-disc list-inside text-muted-foreground space-y-1">
          <li>Discordコミュニティガイドラインや日本法規に反する行為</li>
          <li>引き抜き（DMを除く）や過度な他鯖の話題、掲示板や宣伝チャンネル以外での宣伝行為</li>
          <li>卑猥な言動やその他差別・誹謗中傷をする行為</li>
          <li>サーバーを卑下する行為やサーバーの名を落とす行為</li>
          <li>デマを流す行為</li>
          <li>特定の個人や団体を貶す行為</li>
          <li>不当な差別やいじめ行為、もしくはそれと判断されかねない行為</li>
          <li>荒らしや連投（SPAM）行為</li>
          <li>その他悪質と判断されかねない行為</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">3. 処罰内容</h2>
        <ol className="list-decimal list-inside text-muted-foreground space-y-2">
          <li>
            <strong>タイムアウト（TO）：</strong> 一定期間メッセージ送信やVC接続、リアクションの追加ができなくなる。
            <br />主にSPAMや問題行動をした際に対象。
          </li>
          <li>
            <strong>Quarantine（隔離）：</strong> チャンネルが全て閲覧不可に。
            <br />過度なSPAMや数回目の注意、誹謗中傷を行った際に対象。
          </li>
          <li>
            <strong>Kick（キック）：</strong> サーバーから一時的に退場。招待があれば再参加可能だが、ロールは失われる。
            <br />BANの警告や、繰り返される問題行動の対象。
          </li>
          <li>
            <strong>BAN：</strong> 一定期間サーバーに再参加できない状態。
            <br />荒らしや重大な問題行動、運営による不当処罰にも使用される。
          </li>
          <li>
            <strong>Warn（警告）：</strong> ユーザーに対しての注意。
            <br />主に口頭や警告チャンネルでの注意として使用され、次はBANだという重大警告にも適用される。
          </li>
        </ol>
      </section>
    </div>
  );
}
