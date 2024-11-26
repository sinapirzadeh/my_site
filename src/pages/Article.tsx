import Container from "../components/container/Container";

export default function Article() {

  return (
    <section id="article-detail" className="mx-5 md:mx-24 mb-10 mt-8 z-0">
      <Container>
        <div className="bg-white my-8 dark:text-white dark:bg-gray-600 py-2 px-3 rounded-lg shadow-md ">
          <div className="flex items-center gap-3">
            <a href="/blog">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-7"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            </a>
            <a href="#" className="text-blue-600 dark:text-blue-300">
              برنامه نویسی
            </a>
            /<p className="font-light"> برنام نویس چگون است؟</p>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-700 shadow-md rounded-lg dark:text-gray-200">
          <div className="m-5 pt-5">
            <h1 className="border-r-4 border-blue-500 font-bold text-2xl pr-2">
              چگونه برنامه نویس را شروع کنیم؟
            </h1>

            <div className="flex my-5 dark:text-white gap-4 border-b-2 pb-2">
              <span className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                  />
                </svg>
                <span className="pr-1">0</span>
              </span>
              <span className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
                <span className="pr-1">0</span>
              </span>
              <span className="flex place-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                  />
                </svg>
                <span className="pr-1">0</span>
              </span>
            </div>
          </div>
          <div className="mx-6">
            <img
              className="border-2 rounded-2xl m-auto my-6"
              src="./assets/images/articles/3.jpg"
              alt=""
            />

            <p className="font-light py-8">
              اسکرام چیست؟ تصور کنید تیمی از افراد با مهارت‌های متنوع دارید که
              در یک فضای باز و پویا، با همکاری و هماهنگی کامل، روی پروژه‌ای کار
              می‌کنند. هر روز به دنبال بهبود و رفع مشکلات هستند و در نهایت، با
              شور و شوق به یک هدف مشترک می‌رسند. این توصیف ساده‌ای از دنیای
              اسکرام است. اسکرام یکی از محبوب‌ترین چارچوب‌های مدیریت پروژه است
              که به تیم‌ها کمک می‌کند تا با استفاده از فرآیندهای چابک، محصولات
              با کیفیت و ارزشمندتری را تولید کنند. این روش با تکیه بر تعامل
              مستمر، بازخوردهای مداوم و بهبود تدریجی، موفق شده است تا در صنایع
              مختلف به کار گرفته شود و نتایج چشمگیری را به همراه داشته باشد. در
              ادامه مقاله اسکرام چیست؟، به بررسی اصول اسکرام، مراحل ساده‌ی آن،
              نقش‌های اساسی در تیم و مزایا و کاربردها خواهیم پرداخت. هدف ما این
              است که شما را با این متدلوژی کارآمد آشنا کنیم و نشان دهیم که چگونه
              می‌توانید از آن در پروژه‌های خود بهره ببرید. پس همراه ما باشید تا
              دنیای جذاب اسکرام را کشف کنیم! اسکرام چیست؟ اسکرام به زبان ساده یک
              چارچوب مدیریت پروژه است که در دسته‌بندی روش‌های چابک (Agile) قرار
              می‌گیرد. این روش ابتدا برای توسعه نرم‌افزار ایجاد شد، اما به تدریج
              در صنایع و حوزه‌های مختلفی مانند بازاریابی، مدیریت محصول و حتی
              آموزش نیز مورد استفاده قرار گرفت. هدف اصلی اسکرام افزایش بهره‌وری
              و کیفیت محصولات یا خدمات با ایجاد یک فرآیند تکراری و افزایشی است.
              در اسکرام، کارها به بازه‌های زمانی کوتاه (معمولاً دو تا چهار هفته)
              که به نام “اسپرینت” شناخته می‌شوند، تقسیم می‌شوند. در هر اسپرینت،
              تیم اسکرام بر روی یک مجموعه مشخص از وظایف کار می‌کند که به یک هدف
              معین منجر می‌شود. پیشنهاد مطالعه: رابط کاربری چیست؟ اسکرام مستر
              کیست؟ اسکرام مستر (Scrum Master) یکی از نقش‌های کلیدی در چارچوب
              اسکرام است. وظیفه اصلی اسکرام مستر اطمینان از اجرای صحیح اصول و
              فرآیندهای اسکرام توسط تیم است. به عبارت دیگر، اسکرام مستر مسئول
              هدایت تیم به سمت بهره‌وری بیشتر و استفاده بهینه از اسکرام است.
              تسهیل فرآیندهای اسکرام: اسکرام مستر جلسات مختلف اسکرام را مدیریت و
              هدایت می‌کند، از جمله جلسات برنامه‌ریزی اسپرینت، جلسات روزانه
              (Daily Standup)، بازنگری اسپرینت (Sprint Review) و بازنگری و بهبود
              (Sprint Retrospective). رفع موانع: اسکرام مستر به تیم کمک می‌کند
              تا موانع و مشکلاتی که در راه دستیابی به اهداف اسپرینت وجود دارد را
              شناسایی و برطرف کنند. این موانع می‌توانند فنی، سازمانی یا ارتباطی
              باشند. حفاظت از تیم: اسکرام مستر تیم را در برابر هر گونه دخالت
              خارجی که می‌تواند تمرکز و بهره‌وری آنها را مختل کند، محافظت
              می‌کند. این نقش شامل مدیریت انتظارات ذی‌نفعان و ایجاد محیطی پایدار
              و حمایت‌گر برای تیم است. آموزش و مشاوره: اسکرام مستر نقش مشاور و
              مربی را نیز ایفا می‌کند. او به اعضای تیم کمک می‌کند تا اصول و
              فرآیندهای اسکرام را بهتر درک کنند و آنها را به کار گیرند. ایجاد
              فرهنگ بهبود مستمر: اسکرام مستر تشویق به بازخورد مستمر و بهبود
              فرآیندها در طول زمان می‌کند. او به تیم کمک می‌کند تا بهترین
              شیوه‌ها را شناسایی و به کار گیرند.
            </p>
          </div>
        </div>

        <div className="mt-5">
          <div className="bg-white dark:bg-gray-700 dark:text-white grid grid-cols-6 gap-2 rounded-xl p-4 text-sm">
            <h5 className="text-xl font-bold col-span-6">افزودن نظر</h5>
            <input
              className="bg-slate-100 text-slate-300 dark:bg-slate-500 dark:text-white placeholder:text-slate-600 placeholder:opacity-70 border border-slate-300 col-span-6 resize-none outline-none rounded-lg p-2 duration-300 focus:border-slate-600"
              type="text"
              placeholder="نام"
            />
            <textarea
              className="bg-slate-100 text-slate-300 h-28 placeholder:text-slate-600 placeholder:opacity-70 border border-slate-300 col-span-6 resize-none outline-none rounded-lg p-2 duration-300 focus:border-slate-600"
              placeholder="دیدگاه خود را به اشتراک بگذارید"
            ></textarea>
            <input
              type="submit"
              value="ارسال"
              className="bg-blue-500 py-2 px-10  text-white rounded-lg shadow-lg"
            />
          </div>
          <div
            role="alert"
            className="my-2 p-4 text-gray-900 dark:bg-gray-700 bg-white rounded-lg shadow dark:text-gray-300"
            id="toast-notification"
          >
            <div className="flex items-center">
              <div className="ms-3 text-sm font-normal space-y-3">
                <div className="text-sm font-semibold text-gray-900 dark:text-white border-r-2 border-blue-500 pr-2">
                  نام
                </div>
                <div className="text-sm font-normal">کامنت طرف</div>
                <span className="text-xs font-medium dark:text-blue-300 text-blue-600">
                  دو دقیقه قبل
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
