import CustomInput from "@/components/shared/CustomInput";
import CustomSelect from "@/components/shared/CustomSelect";
import CustomBanner from "@/components/shared/CustomBanner";
import CustomTextArea from "@/components/shared/CustomTextArea";
import { FaInfoCircle, FaTimes } from "react-icons/fa";
import CustomModal from "@/components/shared/CustomModal";
import Layout from "@/components/Layout";
import { useState } from "react";

export default function CampaignFormPage() {
  const [isModal1Open, setIsModal1Open] = useState(false);
  const [isModal2Open, setIsModal2Open] = useState(false);
  return (
    <Layout isActive={true} isSuggested={true}>
      <CustomBanner text=" ایجاد کمپین جدید" />
      <section>
        <div className="rounded-2xl mt-3 sm:mt-6 shadow-lg bg-white border border-gray p-3 sm:p-4">
          <CustomInput
            maxLength={255}
            placeholder="نام کمپین را وارد کنید"
            label="نام کمپین"
            error="This field is required"
            isRequired
          />
        </div>
        <div className="rounded-2xl shadow-lg mt-3 sm:mt-6 bg-white border border-gray p-3 sm:p-4">
          <span className="text-base font-bold  ">فیلتر مخاطبین </span>
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-3 sm:gap-4 mt-3 sm:mt-4">
            <div>
              <CustomSelect
                name="sexuality"
                label="جنسیت"
                options={[]}
                error="This field is required"
                isRequired
              />
            </div>
            <div>
              <CustomSelect
                name="province"
                label="استان"
                options={[]}
                error="This field is required"
                isRequired
              />
            </div>
            <div className="col-span-1">
              <CustomSelect name="city" label="شهر" options={[]} isRequired />
            </div>
          </div>
        </div>
        <div className="mt-3 sm:mt-6">
          <div className="flex sm:items-center max-sm:flex-col-reverse justify-between">
            <div>
              <label htmlFor="message" className="label">
                متن پیامک *
              </label>
            </div>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <div className="badge badge-outline badge-lg px-3 py-2 text-sm font-medium text-[#314158] border-[#CAD5E2]">
                ۱ صفحه
              </div>
              <button
                type="button"
                className="btn btn-ghost btn-sm gap-2 text-xs sm:text-sm h-9 px-3 hover:bg-primary/10 hover:text-primary transition-all duration-200"
                onClick={() => setIsModal1Open(true)}
              >
                <FaInfoCircle className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
                <span className="whitespace-nowrap">
                  راهنمای محاسبه تعداد صفحه
                </span>
              </button>
              <button
                type="button"
                className="btn btn-ghost btn-sm gap-2 text-xs sm:text-sm h-9 px-3 hover:bg-primary/10 hover:text-primary transition-all duration-200"
                onClick={() => setIsModal2Open(true)}
              >
                <FaInfoCircle className="h-4 w-4 sm:h-5 sm:w-5 shrink-0" />
                <span className="whitespace-nowrap">راهنمای تنظیم متن</span>
              </button>
            </div>
          </div>
          <CustomTextArea
            hasCalculate
            placeholder="متن پیام را وارد کنید"
            name="message"
            label="متن پیام"
            error="This field is required"
            isRequired
          />
        </div>
        <div className="mt-3 sm:mt-6 grid sm:grid-cols-2 grid-cols-1 gap-3 sm:gap-5">
          <div>
            <CustomSelect
              label="تاریخ ارسال"
              name="send_date"
              options={[]}
              error="This field is required"
              isRequired
            />
          </div>
          <div>
            <CustomSelect
              label="زمان ارسال"
              name="send_time"
              options={[]}
              error="This field is required"
              isRequired
            />
          </div>
        </div>
        <div className="mt-3 sm:mt-6">
          <CustomInput
            label="تعداد شماره برای ارسال"
            name="number_of_send"
            error="This field is required"
            isRequired
            type="number"
            min={1}
            max={1000}
            step={1}
            placeholder="تعداد شماره برای ارسال"
          />
          <span className="text-xs font-bold">حداقل 5000 شماره</span>
        </div>
        <div className="flex items-end justify-between max-sm:flex-col-reverse max-sm:gap-3 mt-3 sm:mt-6">
          <div className="max-sm:w-full">
            <button className="btn bg-primary rounded-2xl hover:bg-primaryDark text-white px-3 max-sm:w-full sm:px-12 transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-100">
              انصراف
            </button>
          </div>
          <div className="flex max-sm:w-full flex-col gap-1">
            <div className="flex items-center gap-3">
              <span className="text-sm text-base-content/70">هزینه کمپین</span>
              <span className="text-base font-bold text-primary">
                1,900,000 تومان
              </span>
            </div>
            <button className="btn rounded-2xl bg-primary hover:bg-primaryDark text-white px-3 max-sm:w-full sm:px-12 transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-100">
              ذخیره کمپین و پرداخت
            </button>
          </div>
        </div>
      </section>
      {/* Modal 1 */}
      {isModal1Open && (
        <CustomModal
          title="راهنمای تنظیم متن پیامک"
          onClose={() => setIsModal1Open(false)}
        >
          <div>
            <p className="text-base text-primaryDark ">
              برای اینکه پیامک‌تون تاثیرگذار باشه و مشتری اقدام کنه، این نکات رو
              رعایت کنید:
            </p>
            <ul className="list-decimal   list-inside sm:mt-5 mt-3">
              <li className="sm:text-sm text-xs text-primaryDark sm:mb-2.5 mb-2 ">
                از همان خط اول <span className="font-bold">جذاب</span> باشه
                (تخفیف، پیشنهاد خاص، فوریت، خطاب مستقیم)
              </li>
              <li className="sm:text-sm text-xs text-primaryDark sm:mb-2.5 mb-2 ">
                <span className="font-bold">کوتاه و مستقیم</span> بنویس
              </li>
              <li className="sm:text-sm text-xs text-primaryDark sm:mb-2.5 mb-2 ">
                <span className="font-bold">ارزش مشخص</span> به کاربر بده
                (تخفیف، هدیه، فرصت محدود)
              </li>
              <li className="sm:text-sm text-xs text-primaryDark sm:mb-2.5 mb-2 ">
                <span className="font-bold">فوریت</span> ایجاد کن (فقط امروز، تا
                ۴۸ ساعت، ظرفیت محدود)
              </li>
              <li className="sm:text-sm text-xs text-primaryDark sm:mb-2.5 mb-2 ">
                <span className="font-bold">فراخوان واضح</span> به اقدام داشته
                باش (همین حالا فعال کن، روی لینک بزن)
              </li>
              <li className="sm:text-sm text-xs text-primaryDark sm:mb-2.5 mb-2 ">
                <span className="font-bold">شخصی‌سازی</span>کن (اسم مخاطب، نیاز
                مرتبط)
              </li>
              <li className="sm:text-sm text-xs text-primaryDark sm:mb-2.5 mb-2 ">
                <span className="font-bold">لحن ساده و محاوره‌ای</span>(نه خیلی
                رسمی)
              </li>
              <li className="sm:text-sm text-xs text-primaryDark sm:mb-2.5 mb-2 ">
                <span className="font-bold">لینک کوتاه</span>و معتبر استفاده کن
              </li>
              <li className="sm:text-sm text-xs text-primaryDark sm:mb-2.5 mb-2 ">
                <span className="font-bold">اعتمادسازی</span> کن (نام برند،
                پلتفرم معتبر)
              </li>
            </ul>
            <div>
              <span className="text-sm">مثال‌ها:</span>
              <div className="mt-3">
                <div className="flex items-center gap-0.5">
                  <FaTimes className="h-4 w-4 text-error" />
                  <span className="text-sm ">پیام ضعیف:</span>
                </div>
                <div className="bg-red-200 border-r-4 mt-2.5 sm:px-5 px-3 sm:py-4 py-2 rounded-lg border-red-500">
                  <p className="text-xs">
                    به اطلاع کلیه کاربران محترم می‌رساند که سیستم جدیدی
                    راه‌اندازی شده است. برای اطلاعات بیشتر می‌توانید به سایت
                    مراجعه نمایید.
                  </p>
                </div>
              </div>
              <div className="mt-3">
                <div className="flex items-center gap-0.5">
                  <FaTimes className="h-4 w-4 text-error" />
                  <span className="text-sm">پیام قوی:</span>
                </div>
                <div className="bg-green-200 border-r-4 mt-2.5 sm:px-5 px-3 sm:py-4 py-2 rounded-lg border-green-500">
                  <p className="text-xs">
                    🎁 علی عزیز، ۳۰٪ تخفیف ویژه فقط امروز! کد: SALE30
                  </p>
                  <p className="text-xs">همین حالا از کافه ما سفارش بده 👇</p>
                  <p className="text-xs">irancafe80.com</p>
                </div>
              </div>
            </div>
          </div>
        </CustomModal>
      )}

      {/* Modal 2 */}
      {isModal2Open && (
        <CustomModal
          title="محاسبهٔ تعداد صفحهٔ پیامک‌ها"
          onClose={() => setIsModal2Open(false)}
        >
          <div>
            <p className="sm:text-base text-sm text-primaryDark ">
              در سیستم‌های ارسال پیامک، حدودا هر ۶۷ کاراکتر یک صفحه پیامک محسوب
              می‌رشه. مثلا این پیام یک صفحه پیامک حساب می‌رشه:
            </p>
          </div>
          <div className="bg-[#F9FAFB] rounded-2xl sm:text-base text-sm p-4 my-3">
            <div className="flex items-center  justify-between">
              <p>سلام علی عزیز</p>
              <span className="font-bold">۶۷ کاراکتر</span>
            </div>
            <p>از اینکه مشتری کسب‌وکار ما هستید ممنونیم</p>
            <p>کافه ما</p>
            <p>لغو ۱۱</p>
          </div>
          <span className="sm:text-base text-sm font-bold">
            و این پیام، دو صفحه پیامک:{" "}
          </span>
          <div className="bg-[#F9FAFB] rounded-2xl p-4 my-3 sm:text-base text-sm">
            <div className="flex items-center justify-between">
              <p>سلام محمد امین عزیز</p>
              <span className="font-bold">87 کاراکتر</span>
            </div>
            <p>از اینکه مشتری کسب‌وکار ما هستید ممنونیم</p>
            <p>کافه و رستوران سنتی ما</p>
            <p>لغو ۱۱</p>
          </div>
          <div>
            <p className="max-sm:text-justify sm:text-base text-sm">
              بنابراین ممکنه هر پیام ارسالی شما، چند صفحه پیامک شمرده بشه. اگر
              هم از متغیرها، مثل نام مشتری یا مبلغ اعتبار استفاده کنید، بسته به
              هر مشتری ممکنه که تعداد کاراکتر پیام دریافتی و در نتیجه تعداد صفحه
              پیامک‌های اون تغییر کنه. توجه کنید که با توجه به قوانین سامانا،
              عبارت «لغو ۱۱» پایین تمام پیام‌ها اضافه می‌شه و قابل حذف نیست.
            </p>
          </div>
        </CustomModal>
      )}
    </Layout>
  );
}
