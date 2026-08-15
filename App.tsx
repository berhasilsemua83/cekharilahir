import React, { useState, useRef } from 'react';
import { QUESTIONS_DB, RESULT_PROFILES } from './data';
import { getRandomQuestions, calculateResult } from './utils';
import { Question, Temperament, TestResult, ResultProfile } from './types';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { openAffiliateLink } from './affiliateLinks';

// ✅ FIX #2 — Konstanta terpusat, tidak ada magic number lagi
const TOTAL_QUESTIONS = 10;
const MAX_SCORE_PER_TYPE = TOTAL_QUESTIONS; // untuk bar skor hasil
const PURE_TYPE_GAP_THRESHOLD = 4; // disesuaikan dari 15 → 4 karena soal lebih sedikit

// --- Components ---

const StartScreen: React.FC<{ onStart: () => void }> = ({ onStart }) => (
  // Perubahan: Di HP pakai justify-start dan pt-12 agar konten naik ke atas, 
  // di PC/Laptop tetap justify-center.
  <div className="flex flex-col items-center justify-start pt-12 md:justify-center md:pt-4 min-h-screen p-4 text-center max-w-2xl mx-auto fade-in">
    
    {/* Ukuran icon dan jarak bawah diperkecil sedikit di HP */}
    <div className="mb-4 md:mb-6 p-4 bg-slate-800 rounded-full ring-4 ring-indigo-500/20 shadow-2xl shadow-indigo-500/10">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 md:h-16 md:w-16 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    </div>
    
    {/* Ukuran Font disesuaikan agar lebih proporsional di HP */}
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 md:mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-indigo-400">
      Tes Kepribadian
    </h1>
    
    <p className="text-sm sm:text-base md:text-xl text-slate-300 mb-6 md:mb-8 leading-relaxed max-w-lg px-2">
      Temukan tipe kepribadian Anda berdasarkan 4 Type Personality: Sanguinis, Koleris, Melankolis, Plegmatis
    </p>
    
    <button
      onClick={onStart}
      className="px-8 py-3.5 md:px-10 md:py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-2xl shadow-lg shadow-indigo-600/30 transition-all transform hover:scale-105 hover:-translate-y-1"
    >
      Mulai Tes Sekarang
    </button>
    
    <p className="mt-5 md:mt-6 text-xs md:text-sm text-slate-500 font-medium tracking-wide uppercase">
      Gratis &amp; Tanpa Login · {TOTAL_QUESTIONS} Pertanyaan
    </p>
  </div>
);

const QuizScreen: React.FC<{
  question: Question;
  currentIndex: number;
  onAnswer: (answer: Temperament) => void;
}> = ({ question, currentIndex, onAnswer }) => {
  const progress = (currentIndex / TOTAL_QUESTIONS) * 100;

  return (
    <div className="flex flex-col min-h-screen bg-slate-900 max-w-3xl mx-auto fade-in border-x border-slate-800 shadow-2xl">
      {/* Progress Bar */}
      <div className="w-full bg-slate-800 h-1.5 md:h-2 sticky top-0 z-10">
        <div
          className="bg-indigo-500 h-1.5 md:h-2 transition-all duration-300 ease-out shadow-[0_0_10px_rgba(99,102,241,0.5)]"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* ✅ PERUBAHAN: justify-start diganti jadi justify-center agar posisi pas di tengah layar */}
      <div className="flex-1 flex flex-col justify-center px-4 sm:px-10 py-6 md:py-10">
        
        {/* Indikator Soal */}
        <span className="text-[11px] md:text-xs font-bold text-indigo-400 mb-2 md:mb-3 uppercase tracking-widest bg-slate-800 inline-block w-fit px-2.5 py-1 rounded-full border border-slate-700">
          Pertanyaan {currentIndex + 1} / {TOTAL_QUESTIONS}
        </span>

        {/* Ukuran Teks Pertanyaan dibuat pas di mata */}
        <h2 className="text-base sm:text-2xl md:text-4xl font-bold text-white mb-5 md:mb-8 leading-snug">
          {question.question}
        </h2>

        {/* Jarak antar tombol dikembalikan normal karena posisi sudah di tengah */}
        <div className="grid gap-2.5 md:gap-4">
          {(Object.keys(question.options) as Array<keyof typeof question.options>).map((key) => (
            <button
              key={key}
              onClick={() => onAnswer(question.mapping[key])}
              className="group px-3 py-2.5 md:p-5 text-left bg-slate-800 border border-slate-700 rounded-xl md:rounded-2xl hover:border-indigo-500 hover:bg-slate-700/50 transition-all duration-200 flex items-start"
            >
              {/* Ikon Huruf */}
              <span className="flex-shrink-0 w-6 h-6 md:w-8 md:h-8 flex items-center justify-center bg-slate-700 text-slate-300 text-xs md:text-base font-bold rounded-full mr-3 md:mr-5 mt-0.5 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                {key}
              </span>
              
              {/* Teks Opsi Jawaban */}
              <span className="text-[13px] md:text-lg text-slate-200 group-hover:text-white font-medium leading-tight md:leading-snug mt-0.5">
                {question.options[key]}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const ResultScreen: React.FC<{ result: TestResult; onRetry: () => void }> = ({ result, onRetry }) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false); 
  const printRef = useRef<HTMLDivElement>(null);

  const sortedScores = (Object.entries(result.scores) as [Temperament, number][])
    .sort(([, a], [, b]) => b - a);

  const primaryScore = sortedScores[0]?.[1] ?? 0;
  const secondaryScore = sortedScores[1]?.[1] ?? 0;
  const gap = primaryScore - secondaryScore;

  const isPure = gap > PURE_TYPE_GAP_THRESHOLD;
  let profileKey = isPure
    ? `${result.primary}-${result.primary}`
    : `${result.primary}-${result.secondary}`;

  if (!isPure && result.primary === result.secondary) {
    const next = sortedScores.find(k => k[0] !== result.primary);
    profileKey = next ? `${result.primary}-${next[0]}` : `${result.primary}-K`;
  }

  const profile: ResultProfile | undefined = RESULT_PROFILES[profileKey];
  if (!profile) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center text-center p-8">
        <div>
          <p className="text-rose-400 text-lg font-semibold mb-2">
            Profil tidak ditemukan untuk kombinasi: <strong>{profileKey}</strong>
          </p>
          <p className="text-slate-400 text-sm mb-6">
            Silakan tambahkan profil ini ke <code className="bg-slate-800 px-1 py-0.5 rounded">RESULT_PROFILES</code> di <code className="bg-slate-800 px-1 py-0.5 rounded">data.ts</code>
          </p>
          <button
            onClick={onRetry}
            className="px-6 py-2 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-xl border border-slate-600"
          >
            Ulangi Tes
          </button>
        </div>
      </div>
    );
  }

  const temperamentsFull: Record<Temperament, string> = {
    S: 'Sanguinis',
    K: 'Koleris',
    M: 'Melankolis',
    P: 'Plegmatis',
  };

  const handleDownloadPDF = async () => {
    if (!printRef.current) return;
    setIsDownloading(true);

    try {
      await new Promise<void>(resolve =>
        requestAnimationFrame(() => requestAnimationFrame(() => resolve()))
      );

      const canvas = await html2canvas(printRef.current, {
        scale: 2,
        backgroundColor: '#0f172a',
        useCORS: true,
        logging: false,
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
      const imgWidth = 210;
      const pageHeight = 297;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save(`Hasil-Tes-Kepribadian-${profileKey}.pdf`);
    } catch (error) {
      console.error('Gagal membuat PDF:', error);
      alert('Maaf, terjadi kesalahan saat mengunduh PDF.');
    } finally {
      setIsDownloading(false);
    }
  };

  const handleRevealResult = () => {
    openAffiliateLink();
    setIsRevealed(true);
    window.parent.postMessage('scrollToTop', '*');
  };

  return (
    <div className="min-h-screen bg-slate-900 py-6 md:py-10 px-4 sm:px-6 fade-in text-slate-200 flex flex-col justify-center">
      <div
        ref={printRef}
        className="max-w-4xl w-full mx-auto bg-slate-800 rounded-[2rem] shadow-2xl overflow-hidden border border-slate-700"
      >

        {/* Header Section */}
        <div className="bg-gradient-to-br from-indigo-900 to-slate-900 p-6 md:p-8 text-center border-b border-indigo-900/50">
          <h2 className="text-sm md:text-xl text-indigo-300 font-semibold mb-2 md:mb-3 tracking-wide uppercase">Hasil Analisis Anda</h2>
          <div className="inline-block bg-indigo-500/20 border border-indigo-500/30 px-4 py-1.5 md:px-6 md:py-2 rounded-full text-xs md:text-sm font-medium tracking-wide mb-3 md:mb-6 text-indigo-200">
            Tipe Dominan: {isPure ? `${temperamentsFull[result.primary]} Murni` : `${temperamentsFull[result.primary]} & ${temperamentsFull[result.secondary]}`}
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-1 text-white leading-tight">
            {profile.title}
          </h1>
        </div>

        {/* LOGIKA PENAMPILAN */}
        {!isRevealed ? (
          /* JIKA BELUM DIKLIK: Tampilan Rapat, Profesional & Info Jelas */
          <div className="px-6 py-8 md:p-12 text-center bg-slate-800 flex flex-col items-center justify-center fade-in">
            <p className="text-slate-300 text-sm md:text-lg mb-6 max-w-md leading-relaxed">
              Analisis kepribadian Anda telah selesai disusun. Buka dokumen di bawah ini untuk membaca rincian <strong>kekuatan, tantangan, serta saran pengembangan</strong> diri Anda.
            </p>

            <button
              onClick={handleRevealResult}
              className="px-6 py-3.5 md:px-8 md:py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl shadow-lg shadow-indigo-600/30 transition-all transform hover:scale-105 hover:-translate-y-1 text-sm md:text-lg flex items-center gap-2.5 w-full sm:w-auto justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Buka Hasil Lengkap
            </button>
            
            {/* ✅ KOTAK INFO BARU: Lebih Terbaca & Elegan */}
            <div className="mt-7 bg-slate-900/60 border border-slate-700 rounded-xl p-3.5 md:p-4 max-w-sm mx-auto flex items-start text-left gap-3 shadow-inner">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                <strong>Info:</strong> Untuk mendukung layanan ini, sistem akan membuka halaman sponsor di tab baru. Anda dapat langsung menutup tab tersebut untuk melihat hasil tes Anda di sini.
              </p>
            </div>

          </div>
        ) : (
          /* JIKA SUDAH DIKLIK: Tampilkan Hasil Sepenuhnya */
          <div className="fade-in">
            {/* Dynamic Personality Note */}
            <div className="bg-slate-900/50 p-6 mx-6 mt-6 mb-4 rounded-xl border-l-4 border-yellow-500 relative z-10">
              <h4 className="text-yellow-500 font-bold uppercase text-xs tracking-widest mb-1 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Kepribadian Bersifat Dinamis
              </h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                Hasil tes ini adalah potret diri Anda <strong>saat ini</strong>. Kepribadian manusia tidak kaku seperti batu; ia bisa bergeser tergantung tekanan lingkungan, peran sosial, dan kematangan emosi. Gunakan hasil ini sebagai <strong>peta navigasi</strong>, bukan label permanen.
              </p>
            </div>

            {/* Scores Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 border-b border-slate-700">
              {(Object.entries(result.scores) as [Temperament, number][]).map(([key, score]) => (
                <div key={key} className="bg-slate-900/50 rounded-xl p-4 text-center border border-slate-700/50">
                  <div className="text-3xl font-bold text-white mb-1">{score}</div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">{temperamentsFull[key]}</div>
                  <div className="mt-3 w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${key === result.primary ? 'bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.8)]' : 'bg-slate-600'}`}
                      style={{ width: `${(score / MAX_SCORE_PER_TYPE) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Content Section */}
            <div className="p-6 md:p-8 space-y-10 md:space-y-12 leading-relaxed">

              <section>
                <h3 className="text-xl font-bold text-indigo-400 mb-4 border-l-4 border-indigo-500 pl-4">Ringkasan Profil</h3>
                <p className="text-base md:text-lg text-slate-300">{profile.summary}</p>
              </section>

              <div className="grid md:grid-cols-2 gap-8">
                <section>
                  <h3 className="text-xl font-bold text-emerald-400 mb-4 border-l-4 border-emerald-500 pl-4">Kekuatan & Pola Pikir</h3>
                  <ul className="space-y-4 mb-6">
                    {profile.decisionStyle.map((item, idx) => (
                      <li key={idx} className="flex items-start text-sm md:text-base">
                        <span className="text-emerald-500 mr-3 mt-0.5">✓</span>
                        <span className="text-slate-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                  {profile.decisionGuide && (
                    <div className="bg-emerald-900/20 p-5 rounded-xl border border-emerald-500/20">
                      <strong className="block text-emerald-300 mb-3 text-sm uppercase tracking-wide">💡 Gaya Keputusan Terbaik:</strong>
                      <ul className="list-decimal ml-4 space-y-2 text-emerald-100/80 text-sm">
                        {profile.decisionGuide.map((g, i) => <li key={i}>{g}</li>)}
                      </ul>
                    </div>
                  )}
                </section>

                <section>
                  <h3 className="text-xl font-bold text-rose-400 mb-4 border-l-4 border-rose-500 pl-4">Tantangan Khas</h3>
                  <ul className="space-y-4">
                    {profile.challenges.map((item, idx) => (
                      <li key={idx} className="flex items-start text-sm md:text-base">
                        <span className="text-rose-500 mr-3 mt-0.5">!</span>
                        <span className="text-slate-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>

              <section className="bg-indigo-900/10 p-6 md:p-8 rounded-2xl border border-indigo-500/20">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-6">Dinamika Emosi & Interaksi</h3>
                <div className="space-y-8">
                  <div>
                    <strong className="block text-indigo-300 text-sm uppercase mb-3 tracking-wider">⚡ Emosi Internal</strong>
                    <ul className="list-disc ml-5 space-y-2 text-slate-300 text-sm md:text-base">
                      {profile.emotionalDynamics.map((e, i) => <li key={i}>{e}</li>)}
                    </ul>
                    {profile.stressSigns && (
                      <div className="mt-4 text-sm text-rose-300 bg-rose-900/20 p-4 rounded-lg border border-rose-500/20 flex gap-3 items-start">
                        <span className="text-xl">⚠️</span>
                        <div>
                          <strong className="block text-rose-200 mb-1">Tanda Overload:</strong>
                          {profile.stressSigns.join(', ')}
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="border-t border-indigo-500/20 pt-6">
                    <strong className="block text-indigo-300 text-sm uppercase mb-3 tracking-wider">💬 Gaya Interaksi</strong>
                    <ul className="list-disc ml-5 space-y-2 text-slate-300 text-sm md:text-base">
                      {profile.interactionStyle.map((e, i) => <li key={i}>{e}</li>)}
                    </ul>
                    {profile.interactionTips && (
                      <div className="mt-4 bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                        <strong className="block text-slate-400 text-xs uppercase mb-2">Contoh Kalimat Efektif:</strong>
                        {profile.interactionTips.map((tip, i) => (
                          <p key={i} className="text-indigo-200 italic mb-1 text-sm md:text-base">"{tip}"</p>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-bold text-white mb-4">Manajemen Konflik</h3>
                <div className="bg-slate-800 border border-slate-700 p-6 rounded-xl space-y-4 shadow-lg text-sm md:text-base">
                  <div><strong className="text-slate-200 block mb-1">🔥 Pemicu:</strong> <span className="text-slate-400">{profile.conflictTrigger}</span></div>
                  {profile.conflictStress && <div><strong className="text-slate-200 block mb-1">🤯 Saat Stres:</strong> <span className="text-slate-400">{profile.conflictStress}</span></div>}
                  {profile.conflictSolution && (
                    <div className="mt-4 pt-4 border-t border-slate-700">
                      <strong className="block text-emerald-400 mb-2">✅ Cara Meredakan:</strong>
                      <ul className="list-disc ml-5 text-slate-300 space-y-1">
                        {profile.conflictSolution.map((s, i) => <li key={i}>{s}</li>)}
                      </ul>
                    </div>
                  )}
                </div>
              </section>

              <section>
                <h3 className="text-xl font-bold text-amber-400 mb-4 border-l-4 border-amber-500 pl-4">Rekomendasi Pengembangan</h3>
                <div className="grid sm:grid-cols-2 gap-4 text-sm md:text-base">
                  {profile.recommendations.map((rec, idx) => (
                    <div key={idx} className="bg-amber-900/10 p-5 rounded-xl border border-amber-500/20 text-amber-100/90 shadow-sm">
                      {rec}
                    </div>
                  ))}
                </div>
              </section>

              {profile.checklist && (
                <section>
                  <h3 className="text-xl font-bold text-blue-400 mb-4 border-l-4 border-blue-500 pl-4">Checklist Pembiasaan 90 Hari</h3>
                  <div className="bg-blue-900/10 p-6 rounded-xl border border-blue-500/20">
                    <ul className="space-y-3 text-sm md:text-base">
                      {profile.checklist.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-blue-400 mr-3 font-bold mt-0.5">•</span>
                          <span className="text-slate-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>
              )}

              {profile.direction && (
                <section className="bg-gradient-to-r from-slate-800 to-slate-900 text-white p-6 md:p-8 rounded-2xl text-center border border-slate-700 shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
                  <h3 className="text-xs md:text-sm font-bold mb-3 uppercase tracking-widest text-slate-400">Arah yang Jelas</h3>
                  <p className="text-lg md:text-2xl font-medium leading-relaxed text-indigo-100 italic">"{profile.direction}"</p>
                </section>
              )}

              <section>
                <h3 className="text-xl font-bold text-white mb-4">Cocok di Bidang / Peran</h3>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {profile.suitableCareers.map((job, idx) => (
                    <span key={idx} className="px-3 py-1.5 md:px-4 md:py-2 bg-slate-700 text-indigo-200 rounded-lg font-medium text-xs md:text-sm border border-slate-600 hover:bg-slate-600 transition-colors cursor-default">
                      {job}
                    </span>
                  ))}
                </div>
              </section>

            </div>

            {/* Disclaimer */}
            <div className="bg-slate-900 p-6 md:p-8 text-xs md:text-sm text-slate-500 border-t border-slate-700 leading-relaxed">
              <strong className="block mb-3 font-bold uppercase text-slate-400 tracking-wide">Disclaimer & Batasan Penggunaan</strong>
              <p className="mb-2">Dokumen ini adalah materi edukasi dan pengembangan diri berbasis kerangka temperamen/kepribadian. Dokumen ini bukan diagnosis klinis, bukan alat diagnosis gangguan psikologis, dan tidak menggantikan penilaian profesional (psikolog/psikiater).</p>
              <p className="mb-2">Hasil dan saran dalam dokumen ini bersifat umum dan dapat berbeda tergantung konteks kehidupan, pengalaman, dan lingkungan Anda. Gunakan informasi ini sebagai bahan refleksi untuk pengambilan keputusan yang lebih sadar.</p>
              <p className="mb-2">Jika Anda mengalami keluhan psikologis yang mengganggu fungsi harian (misalnya kecemasan berat, depresi, pikiran menyakiti diri, trauma berat, atau gangguan tidur berkepanjangan), disarankan untuk mencari bantuan profesional.</p>
              <p><strong>Kerahasiaan:</strong> Jika dokumen ini dibuat berdasarkan data pribadi, informasi Anda dijaga kerahasiaannya dan tidak dibagikan tanpa izin.</p>
            </div>

            <div className="p-6 md:p-8 text-center bg-slate-800 flex flex-col sm:flex-row gap-3 md:gap-4 justify-center" data-html2canvas-ignore="true">
              <button
                onClick={onRetry}
                className="px-6 py-3 md:px-8 md:py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-xl transition-all border border-slate-600 text-sm md:text-base"
              >
                Ulangi Tes
              </button>

              <button
                onClick={handleDownloadPDF}
                disabled={isDownloading}
                className="px-6 py-3 md:px-8 md:py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl shadow-lg shadow-indigo-600/30 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed text-sm md:text-base"
              >
                {isDownloading ? (
                  <>
                    <svg className="animate-spin h-4 w-4 md:h-5 md:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Memproses...
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download PDF
                  </>
                )}
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default function App() {
  const [gameState, setGameState] = useState<'start' | 'quiz' | 'result'>('start');
  const [currentQuestions, setCurrentQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Temperament[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [result, setResult] = useState<TestResult | null>(null);

  const handleStart = () => {
    // ✅ FIX #2 — Pakai konstanta TOTAL_QUESTIONS
    const questions = getRandomQuestions(QUESTIONS_DB, TOTAL_QUESTIONS);

    // ✅ FIX #3 — Guard: pastikan soal tersedia sebelum mulai
    if (questions.length === 0) {
      alert('Data soal tidak tersedia. Periksa QUESTIONS_DB di data.ts.');
      return;
    }

    setCurrentQuestions(questions);
    setAnswers([]);
    setCurrentIndex(0);
    setGameState('quiz');
    window.scrollTo(0, 0);
    window.parent.postMessage('scrollToTop', '*');
  };

  const handleAnswer = (answer: Temperament) => {
    // ✅ FIX #3 — Guard: jaga dari state kosong
    if (currentQuestions.length === 0) return;

    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    // ✅ FIX #2 — Pakai TOTAL_QUESTIONS, bukan hardcode 29
    if (currentIndex < TOTAL_QUESTIONS - 1) {
      setCurrentIndex(currentIndex + 1);
      window.scrollTo(0, 0);
      window.parent.postMessage('scrollToTop', '*');
    } else {
      finishTest(newAnswers);
    }
  };

  const finishTest = (finalAnswers: Temperament[]) => {
    const res = calculateResult(finalAnswers);
    setResult(res);
    setGameState('result');
    window.scrollTo(0, 0);
    window.parent.postMessage('scrollToTop', '*');
  };

  return (
    <div className="font-sans text-slate-200">
      {gameState === 'start' && <StartScreen onStart={handleStart} />}
      {gameState === 'quiz' && currentQuestions.length > 0 && (
        <QuizScreen
          question={currentQuestions[currentIndex]}
          currentIndex={currentIndex}
          onAnswer={handleAnswer}
        />
      )}
      {gameState === 'result' && result && (
        <ResultScreen result={result} onRetry={() => setGameState('start')} />
      )}
    </div>
  );
}
