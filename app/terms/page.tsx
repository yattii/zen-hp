// app/terms/page.tsx
export default function TermsPage() {
  return (
    <main className="px-6 py-20 max-w-3xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-center">利用規約</h1>

      <section className="space-y-6 text-sm leading-relaxed">
        <p>
          この利用規約（以下、「本規約」といいます。）は、当サービスが提供する「名刺代わりのホームページ制作事業」（以下、「本サービス」といいます。）の利用条件を定めるものです。
        </p>

        <div>
          <h2 className="font-semibold mb-1">第1条（適用）</h2>
          <p>
            本規約は、本サービスの利用に関する当サービスと利用者との間の一切の関係に適用されます。
          </p>
        </div>

        <div>
          <h2 className="font-semibold mb-1">第2条（禁止事項）</h2>
          <p>
            利用者は、以下の行為をしてはなりません：
            <ul className="list-disc list-inside mt-2">
              <li>法令または公序良俗に違反する行為</li>
              <li>他者の知的財産権を侵害する行為</li>
              <li>虚偽の情報を登録する行為</li>
            </ul>
          </p>
        </div>

        <div>
          <h2 className="font-semibold mb-1">第3条（サービス内容の変更）</h2>
          <p>
            当サービスは、ユーザーへの通知なくサービス内容を変更・中断・終了することがあります。
          </p>
        </div>

        <div>
          <h2 className="font-semibold mb-1">第4条（免責事項）</h2>
          <p>
            本サービスの利用によって生じた損害について、当サービスは一切の責任を負いません。
          </p>
        </div>

        <div>
          <h2 className="font-semibold mb-1">第5条（準拠法・裁判管轄）</h2>
          <p>
            本規約の解釈にあたっては、日本法を準拠法とします。また、本サービスに関して紛争が生じた場合には、当サービス所在地を管轄する裁判所を専属的合意管轄とします。
          </p>
        </div>

        <p className="text-right mt-6">最終更新日：2025年8月</p>
      </section>
    </main>
  );
}
