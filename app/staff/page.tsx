export default function Staff() {
  return (
    <div className="container px-4 py-12 space-y-10">
      <h1 className="text-3xl font-bold mb-6">スタッフ一覧</h1>

      <section>
        <h2 className="text-2xl font-semibold mb-2">代表</h2>
        <ul className="list-disc list-inside text-muted-foreground">
          <li>
            <a href="/staff/rrmk" className="text-blue-500">
              rrmk
            </a>
          </li>
          <li>
            <a href="/staff/neneko" className="text-blue-500">
              ねねこ
            </a>
          </li>
          <li>
            <a href="/staff/raiki" className="text-blue-500">
              夜宮らいき
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">副代表</h2>
        <ul className="list-disc list-inside text-muted-foreground">
          <li>
            <a href="/staff/midoneru" className="text-blue-500">
              みどねる
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">運営</h2>
        <ul className="list-disc list-inside text-muted-foreground">
          <li>
            <a href="/staff/nawa" className="text-blue-500">
              なわ
            </a>
          </li>
          <li>
            <a href="/staff/vigorousumoon" className="text-blue-500">
              vigorousumoon
            </a>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-2">運営補佐</h2>
        <ul className="list-disc list-inside text-muted-foreground">
          <li>
            <a href="/staff/himari" className="text-blue-500">
              ひまり
            </a>
          </li>
          <li>
            <a href="/staff/yomi" className="text-blue-500">
              よみさん
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}
