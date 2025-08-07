// app/privacy-policy/page.tsx

export default function PrivacyPolicyPage() {
  return (
    <main className="px-6 py-20 max-w-3xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-center">プライバシーポリシー</h1>

      <section className="space-y-6 text-sm leading-relaxed">
        <p>
          当サービス（以下、「当方」といいます）は、ホームページ制作事業において取得する個人情報の取扱いについて、以下の通りプライバシーポリシーを定めます。
        </p>

        <div>
          <h2 className="font-semibold mb-1">第1条（個人情報の収集）</h2>
          <p>
            当方は、お問い合わせやご契約の際に、氏名、メールアドレス、店舗情報などの個人情報を取得することがあります。
          </p>
        </div>

        <div>
          <h2 className="font-semibold mb-1">第2条（個人情報の利用目的）</h2>
          <p>収集した個人情報は、以下の目的で利用します：</p>
          <ul className="list-disc list-inside mt-2">
            <li>サービス提供および業務遂行のため</li>
            <li>お問い合わせ対応のため</li>
            <li>重要なお知らせの通知のため</li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold mb-1">第3条（個人情報の第三者提供）</h2>
          <p>
            法令に基づく場合を除き、事前の同意なく第三者に個人情報を提供することはありません。
          </p>
        </div>

        <div>
          <h2 className="font-semibold mb-1">第4条（個人情報の管理）</h2>
          <p>
            当方は、個人情報への不正アクセス、紛失、漏洩等を防止するために、必要かつ適切な安全管理措置を講じます。
          </p>
        </div>

        <div>
          <h2 className="font-semibold mb-1">第5条（開示・訂正・削除）</h2>
          <p>
            ご本人からの個人情報の開示、訂正、削除のご依頼には、速やかに対応いたします。お問い合わせは下記の連絡先までお願いいたします。
          </p>
        </div>

        <div>
          <h2 className="font-semibold mb-1">第6条（お問い合わせ）</h2>
          <p>
            本ポリシーに関するお問い合わせは、以下までお願いいたします：
            <br />
            メールアドレス：ooyayusei@gmail.com
          </p>
        </div>

        <p className="text-right mt-6">最終更新日：2025年8月</p>
      </section>
    </main>
  );
}
