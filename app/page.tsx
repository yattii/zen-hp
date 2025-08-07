"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import emailjs from "emailjs-com"; // ← EmailJS をインポート
import { ChevronDownIcon } from "@heroicons/react/24/outline";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // EmailJS フォーム用
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<string | null>(null);

  // フォーム送信処理
  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_t5i7v89", // ← あなたの EmailJS の Service ID
        "template_xp57nct", // ← あなたの EmailJS の Template ID
        formRef.current,
        "rQSv7TWFcA0oKddUP" // ← あなたの EmailJS の Public Key
      )
      .then(
        () => {
          setStatus("送信が完了しました。ありがとうございました！");
          formRef.current?.reset();
        },
        (error) => {
          console.error(error);
          setStatus("送信に失敗しました。再度お試しください。");
        }
      );
  };

  // メニュー外クリックで閉じる処理
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target as Node)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [menuOpen]);

  // スムーススクロール設定
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };
  return (
    <main className="text-gray-800">
      {/* ナビゲーション */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 w-full bg-white shadow z-50"
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
          {/* ロゴ */}
          <a
            href="#top"
            className="flex items-center"
            onClick={handleLinkClick}
          >
            <div className="relative h-12 w-32">
              <Image
                src="/images/ZENロゴ背景な.png"
                alt="ロゴ"
                fill
                className="object-contain"
                priority
              />
            </div>
          </a>

          {/* PCナビ */}
          <div className="hidden md:flex space-x-6 font-semibold text-gray-700">
            <a href="#about" className="hover:underline">
              選ばれる理由
            </a>
            <a href="#plan" className="hover:underline">
              料金
            </a>
            <a href="#works" className="hover:underline">
              制作事例
            </a>
            <a href="#contact" className="hover:underline">
              問い合わせ
            </a>
            <a href="#company" className="hover:underline">
              会社概要
            </a>
          </div>

          {/* モバイルボタン */}
          <button
            className="md:hidden z-50 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="メニューを開閉"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </motion.nav>

      {/* モバイルメニュー（背景付き） */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/30 z-40"
            onClick={() => setMenuOpen(false)}
          >
            <motion.div
              ref={menuRef}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute md:hidden top-16 left-0 w-full bg-white py-4 flex flex-col items-center space-y-4 shadow"
              onClick={(e) => e.stopPropagation()} // メニュー内クリックは閉じない
            >
              <a href="#about" className="block" onClick={handleLinkClick}>
                選ばれる理由
              </a>
              <a href="#plan" className="block" onClick={handleLinkClick}>
                料金
              </a>
              <a href="#works" className="block" onClick={handleLinkClick}>
                制作事例
              </a>
              <a href="#contact" className="block" onClick={handleLinkClick}>
                問い合わせ
              </a>
              <a href="#company" className="block" onClick={handleLinkClick}>
                会社概要
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero セクション */}
      <section className="text-primary h-screen flex flex-col justify-center items-center px-6 text-center pt-20">
        {/* 背景画像（アニメーション付き） */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/images/hero-bg.png" // 🔁あなたの画像パスに置き換えてください
            alt="背景画像"
            fill
            className="object-cover"
            priority
          />

          {/* グラデーションレイヤー */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-2xl md:text-4xl font-bold mb-60 md:mb-72 z-10"
        >
          『名刺代わり』
          <span className="text-gray-800">のホームページで</span>
          <br />
          ”お店の信頼”
          <span className="text-gray-800">をカタチに</span>
        </motion.h1>

        <motion.p
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2.5, ease: "easeOut", delay: 2 }} // delayでH1の後に出す
          className="text-lg md:text-xl mb-8 text-gray-800 z-10"
        >
          初期費用5万円、月1万円で導入できる安心のWebサイト
        </motion.p>

        <motion.a
          href="#about"
          initial={{ opacity: 0.3, y: 0 }}
          animate={{ opacity: 1, y: 10 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute z-10 bottom-6 text-gray-200 hover:text-primary cursor-pointer flex flex-col items-center"
        >
          <p className="mt-2 text-xs">Scroll</p>
          <ChevronDownIcon className="h-6 w-6 mx-auto" />
        </motion.a>
      </section>

      {/* About セクション */}
      <section
        id="about"
        className="relative py-24 px-6 bg-gradient-to-br from-white via-gray-50 to-gray-100 overflow-hidden"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
            選ばれるお店には、
            <br className="sm:hidden" />
            <span className="text-primary">“信頼の証”</span>がある。
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-12">
            SNSや口コミサイトだけでは伝わらない、
            <br className="sm:hidden" />
            お店の<strong>“空気感”や“こだわり”</strong>を届けるために。
            <br />
            <span className="font-semibold text-gray-800">
              「名刺代わりのホームページ」
            </span>
            が、 ネット上での比較時代における<strong>来店率アップの鍵</strong>
            となります。
          </p>
        </div>

        {/* 3つの価値ポイント */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 mb-20">
          {[
            {
              title: "第一印象で信頼される",
              text: "お客様は数秒で「良い店か」を判断。ホームページがあれば選ばれる確率が高まります。",
              imageSrc: "/images/icon1.png",
            },
            {
              title: "比較に強い設計",
              text: "価格・雰囲気・衛生面など、比較される時代に必要な情報が整った構成に。",
              imageSrc: "/images/icon2.png",
            },
            {
              title: "「あるだけ」で違う",
              text: "公式サイトがあるだけで、信頼・安心・問い合わせ率が向上します。",
              imageSrc: "/images/icon3.png",
            },
          ].map(({ title, text, imageSrc }, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center hover:shadow-xl transition"
            >
              <div className="mb-4">
                <Image
                  src={imageSrc}
                  alt={title}
                  width={48}
                  height={48}
                  className="mx-auto"
                />
              </div>
              <h3 className="font-bold text-xl text-gray-800 mb-2">{title}</h3>
              <p className="text-gray-600 text-sm">{text}</p>
            </div>
          ))}
        </div>

        {/* 強みセクション */}
        <div className="max-w-5xl mx-auto text-center mb-20">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            なぜ、私たちに依頼すべきか？
          </h3>
          <p className="text-gray-800 leading-relaxed max-w-3xl mx-auto">
            私たちは「集客目的」ではなく、
            <strong>来店率を高めるための“信頼”構築</strong>に特化しています。
            <br />
            写真・文章・導線設計すべてにおいて、
            <strong>お客様目線で「安心・誠実さ」が伝わる</strong>よう設計。
            <br />
            また、<strong>スマホ対応・見やすさ・更新しやすさ</strong>
            にも徹底的に配慮しています。
          </p>
        </div>

        {/* 他社比較テーブル */}
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-xl font-semibold text-center text-gray-800 mb-4">
            他社との違い
          </h3>

          {/* スクロールのヒント（スマホでのみ表示） */}
          <p className="text-xs text-gray-500 mb-2 md:hidden text-center">
            ← スクロールして比較表を確認できます →
          </p>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] text-xs md:text-sm text-gray-700 bg-white shadow-md rounded-lg">
              <thead className="bg-gray-100 text-gray-800">
                <tr>
                  <th className="py-2 px-3 text-left whitespace-nowrap">
                    項目
                  </th>
                  <th className="py-2 px-3 text-center whitespace-nowrap">
                    当サービス
                  </th>
                  <th className="py-2 px-3 text-center whitespace-nowrap">
                    大手制作会社
                  </th>
                  <th className="py-2 px-3 text-center whitespace-nowrap">
                    集客広告サービス
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-2 px-3 font-medium text-gray-800">目的</td>
                  <td className="text-center px-2">信頼の構築・比較対策</td>
                  <td className="text-center px-2">ブランディング全般</td>
                  <td className="text-center px-2">検索上位・集客</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 font-medium text-gray-800">
                    費用感
                  </td>
                  <td className="text-center px-2">導入しやすい価格</td>
                  <td className="text-center px-2">数十万〜数百万円</td>
                  <td className="text-center px-2">毎月高額な掲載費</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 font-medium text-gray-800">
                    導入スピード
                  </td>
                  <td className="text-center px-2">最短3日で公開</td>
                  <td className="text-center px-2">制作に数週間〜数ヶ月</td>
                  <td className="text-center px-2">審査・契約後に掲載開始</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 font-medium text-gray-800">
                    更新のしやすさ
                  </td>
                  <td className="text-center px-2">LINEで簡単に依頼</td>
                  <td className="text-center px-2">都度見積・時間差</td>
                  <td className="text-center px-2">掲載内容は限定的</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 font-medium text-gray-800">
                    個人店舗対応
                  </td>
                  <td className="text-center px-2">◎（特化）</td>
                  <td className="text-center px-2">△（企業向け）</td>
                  <td className="text-center px-2">△（検索競争あり）</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 背景装飾 */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-red-100 rounded-full opacity-40 blur-2xl animate-pulse -z-10"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-yellow-100 rounded-full opacity-30 blur-2xl animate-pulse -z-10"></div>
      </section>

      {/* Plan セクション */}
      <section
        id="plan"
        className="py-24 px-6 bg-gradient-to-b from-gray-100 to-white"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">料金プラン</h2>

          {/* プラン概要 */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-10 max-w-xl mx-auto">
            <p className="text-lg text-gray-700 mb-4">
              <span className="text-2xl font-bold text-primary">
                初期費用：5万円
              </span>
            </p>
            <p className="text-lg text-gray-700 mb-2">
              <span className="text-xl font-semibold text-gray-800">
                月額費用：1万円
              </span>
            </p>
            <p className="text-sm text-gray-600">
              ※2年契約・更新制（いつでも途中解約可）
              <br />
              ※解約後もホームページを掲載できます
            </p>
          </div>

          {/* 含まれるサービス */}
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            料金に含まれるサービス
          </h3>
          <ul className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto text-left text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-primary">✔</span>{" "}
              スマホ・PC対応のレスポンシブ設計
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">✔</span>{" "}
              写真・メニュー・価格情報の掲載
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">✔</span>{" "}
              地図・SNSリンク・営業時間の表示
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">✔</span>{" "}
              月1回までの簡単な修正サポート（LINE対応）
            </li>
          </ul>

          {/* オプション案内（簡潔に） */}
          <div className="mt-12 text-center text-gray-800">
            <p className="text-sm text-gray-600">
              ※その他システム導入などの対応も可能です。
              <br className="sm:hidden" />
              ご希望に応じて柔軟にご相談ください。
            </p>
          </div>
        </div>
      </section>

      {/* Works セクション */}
      <section id="works" className="py-20 px-6 bg-white">
        <h2 className="text-3xl font-bold mb-6 text-center">制作事例</h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }} // ← 5000ms = 5秒に変更
          loop
          speed={2000}
          spaceBetween={24}
          slidesPerView={1} // ← モバイル対応が必要ならここを1に
          className="w-full mx-auto"
          style={
            {
              // Swiperのテーマカラー（矢印・●など）を紫に変更
              "--swiper-theme-color": "#8b5cf6", // Tailwindでいう purple-500
            } as React.CSSProperties
          }
        >
          {/* スライド1 */}
          <SwiperSlide>
            <a
              href="https://mizutaki-ten.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="border rounded-lg overflow-hidden shadow-lg cursor-pointer">
                <div className="relative w-full aspect-[3/2]">
                  <Image
                    src="/images/restaurant1.png"
                    alt="水炊き天"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-1">水炊き天</h3>
                  <p className="text-sm text-gray-600 mb-2">大阪市</p>
                  <p className="text-sm">
                    落ち着いた和の雰囲気。LINE更新対応。
                  </p>
                </div>
              </div>
            </a>
          </SwiperSlide>

          {/* スライド2 */}
          <SwiperSlide>
            <a
              href="https://livres-alpha.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="border rounded-lg overflow-hidden shadow-lg cursor-pointer">
                {/* 画像枠（アスペクト比3:2） */}
                <div className="relative w-full aspect-[3/2]">
                  <Image
                    src="/images/restaurant2.png"
                    alt="リーブル"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold mb-1">八幡・リーブル</h3>
                  <p className="text-sm text-gray-600 mb-2">八幡市</p>
                  <p className="text-sm">八幡の小さなおパン屋さん。</p>
                </div>
              </div>
            </a>
          </SwiperSlide>
        </Swiper>
      </section>
    

      {/* Contact セクション */}
      <section id="contact" className="py-20 px-6 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-6">お問い合わせ</h2>
        <p className="mb-4">LINEまたはフォームからお気軽にご相談ください。</p>

        {/* LINEボタン */}
        <a
          href="https://line.me/ja/（あなたのLINEリンク）"
          className="inline-block bg-green-500 text-white px-6 py-3 rounded-full shadow hover:bg-green-600 transition mb-10"
        >
          LINEで問い合わせる
        </a>

        {/* お問い合わせフォーム */}
        <form
  ref={formRef}
  onSubmit={sendEmail}
  className="w-full max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md text-left"
>
  <label className="block mb-4">
    <span className="text-gray-700 text-sm font-semibold">お名前</span>
    <input
      type="text"
      name="name"
      required
      className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-purple-500 focus:border-purple-500"
    />
  </label>

  <label className="block mb-4">
    <span className="text-gray-700 text-sm font-semibold">メールアドレス</span>
    <input
      type="email"
      name="email"
      required
      className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-purple-500 focus:border-purple-500"
    />
  </label>

  <label className="block mb-4">
    <span className="text-gray-700 text-sm font-semibold">件名</span>
    <input
      type="text"
      name="subject"
      required
      className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-purple-500 focus:border-purple-500"
    />
  </label>

  <label className="block mb-4">
    <span className="text-gray-700 text-sm font-semibold">お問い合わせ内容</span>
    <textarea
      name="message"
      rows={4}
      required
      className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-purple-500 focus:border-purple-500"
    ></textarea>
  </label>

  <button
    type="submit"
    className="w-full bg-purple-600 text-white font-bold py-2 px-4 rounded hover:bg-purple-700 transition"
  >
    送信する
  </button>

  {status && (
    <p className="text-sm text-center text-red-500 mt-4">{status}</p>
  )}
</form>

      </section>

      {/* Company セクション */}
<section id="company" className="py-20 px-6 bg-white">
  <h2 className="text-3xl font-bold mb-8 text-center">会社概要</h2>

  <div className="max-w-2xl mx-auto bg-gray-50 p-6 shadow-md text-sm md:text-base">
    <dl className="space-y-4">
      <div className="flex flex-col md:flex-row md:justify-between">
        <dt className="font-semibold text-gray-700">会社名</dt>
        <dd className="text-gray-900">株式会社ZEN</dd>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between">
        <dt className="font-semibold text-gray-700">代表者</dt>
        <dd className="text-gray-900">大舘 勇世</dd>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between">
        <dt className="font-semibold text-gray-700">所在地</dt>
        <dd className="text-gray-900">大阪府枚方市</dd>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between">
        <dt className="font-semibold text-gray-700">メールアドレス</dt>
        <dd className="text-gray-900">ooyayusei@gmail.com</dd>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between">
        <dt className="font-semibold text-gray-700">設立</dt>
        <dd className="text-gray-900">2025年</dd>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between">
        <dt className="font-semibold text-gray-700">事業内容</dt>
        <dd className="text-gray-900">
          ホームページ制作、チラシ・ポスター作成、<br />
          予約管理システム、シフト管理、SNS運用支援、<br />
          キャッシュレス決済導入など（要相談）
        </dd>
      </div>
    </dl>
  </div>
</section>


      {/* Footer */}
      <footer className="py-10 px-6 bg-gray-50 text-sm text-gray-600">
        <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3 text-center sm:text-left">
          {/* ページリンク */}
          <div>
            <h4 className="font-semibold mb-2">ページリンク</h4>
            <ul className="space-y-1">
              <li>
                <a href="#about" className="hover:underline">
                  選ばれる理由
                </a>
              </li>
              <li>
                <a href="#works" className="hover:underline">
                  制作事例
                </a>
              </li>
              <li>
                <a href="#plan" className="hover:underline">
                  料金プラン
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  お問い合わせ
                </a>
              </li>
              <li>
                <a href="#company" className="hover:underline">
                  会社概要
                </a>
              </li>
            </ul>
          </div>

          {/* 利用情報 */}
          <div>
            <h4 className="font-semibold mb-2">各種ポリシー</h4>
            <ul className="space-y-1">
              <li>
                <a href="/privacy-policy" className="hover:underline">
                  プライバシーポリシー
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:underline">
                  利用規約
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* コピーライト */}
        <div className="mt-8 text-center text-gray-400">
          © {new Date().getFullYear()} 名刺代わりのホームページ制作事業
        </div>
      </footer>
    </main>
  );
}

// git add .
// git commit -m "Fix something"
// git push
