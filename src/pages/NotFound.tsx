import Container from "../components/container/Container";

export default function NotFound() {
  return (
    <Container>
      <div className="text-center my-20">
        <h1 className="mb-4 text-6xl font-semibold text-red-500">404</h1>
        <p className="mb-4 dark:text-white text-lg text-gray-600">
          صفحه مورد نظرتان یافت نشد.
        </p>
        <div className="animate-bounce">
          <svg
            className="mx-auto h-16 w-16 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            ></path>
          </svg>
        </div>
        <p className="mt-4 dark:text-white text-gray-600">
          <a
            href="/"
            className="text-white p-2 px-3 shadow-lg border-2 rounded-lg bg-orange-500"
          >
            بازگشت
          </a>
        </p>
      </div>
    </Container>
  );
}

// <div className="text-center space-y-5 my-20 dark:text-white px-20">
// <h1 className="text-6xl my-3">404</h1>
// <h2 className="text-2xl mb-10 text-red-600">صفحه مورد نظر شما پیدا نشد</h2>
// <div className="grid grid-cols-2 gap-10">
//   <div>
//     <p>
//       شما را به تماشای شاهکار انیمه‌ای اتک آن تایتان دعوت می‌کنم؛ اثری
//       مملو از هیجان، داستانی عمیق. تجربه‌ای که نباید
//       از دست بدهید!
//       <br />
//       <motion.a
//         href="https://aiofilm.com/anime/shingeki-no-kyojin/"
//         className="relative my-5 inline-block px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg shadow-lg"
//         initial={{ scale: 0.9, opacity: 0.8 }}
//         whileHover={{
//           scale: 1.1,
//           backgroundPosition: "200% center",
//           boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.25)",
//         }}
//         whileTap={{ scale: 0.95 }}
//         transition={{ duration: 0.3 }}
//         style={{
//           backgroundSize: "200% auto",
//           transition: "background-position 0.5s ease",
//         }}
//       >
//         تماشای انیمه
//       </motion.a>
//     </p>
//     <img
//       className="border-4 shadow-lg border-purple-600 rounded-lg m-auto "
//       src="./../../public/images/not-found-img/anime_img.jpg"
//       alt="اتک آن تایتان"
//     />
//   </div>
//   <div>
//     <p>
//       شما را به تماشای سریال <span className="text-red-600">day of the jackal</span> دعوت می‌کنم.
//       <br />
//       <motion.a
//         href="https://digimovie201.sbs/serie/the-day-of-the-jackal/"
//         className="relative my-5 inline-block px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg shadow-lg"
//         initial={{ scale: 0.9, opacity: 0.8 }}
//         whileHover={{
//           scale: 1.1,
//           backgroundPosition: "200% center",
//           boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.25)",
//         }}
//         whileTap={{ scale: 0.95 }}
//         transition={{ duration: 0.3 }}
//         style={{
//           backgroundSize: "200% auto",
//           transition: "background-position 0.5s ease",
//         }}
//       >
//         تماشای سریال
//       </motion.a>
//     </p>
//     <img
//       className="border-4 shadow-lg border-purple-600 rounded-lg m-auto "
//       src="./../../public/images/not-found-img/The-Day-of-the-Jackal.webp"
//       alt="اتک آن تایتان"
//     />
//   </div>
// </div>
// </div>
