
import React from 'react';
import { FacebookIcon, LinkedInIcon, TwitterIcon, InstagramIcon } from './components/icons'; // Assuming icons.tsx

const App: React.FC = () => {
  const doctorInfo = {
    name: "الدكتور إبراهيم المستشار", // Placeholder, user can change
    specialty: "أخصائي طب وجراحة الفم والأسنان", // Placeholder
    bio: "طبيب أسنان متخصص بخبرة واسعة في تقديم رعاية صحية شاملة للفم والأسنان. ملتزم بتقديم أفضل الخدمات الطبية لمرضاي باستخدام أحدث التقنيات، مع التركيز على العلاج الوقائي والتجميلي لتحقيق ابتسامة صحية وجميلة.",
    profileImageUrl: "https://picsum.photos/seed/docprofile/256/256", // Placeholder image
    facebookUrl: "https://www.facebook.com/doc.hema.2004",
    // Add other social media URLs here if available
    // linkedInUrl: "https://linkedin.com/in/yourprofile",
    // twitterUrl: "https://twitter.com/yourprofile",
    // instagramUrl: "https://instagram.com/yourprofile",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-sky-100 flex flex-col items-center justify-center p-4 font-sans selection:bg-sky-200 selection:text-sky-900">
      <main className="bg-white shadow-2xl rounded-xl p-6 md:p-10 w-full max-w-2xl text-center transform transition-all duration-500 hover:scale-[1.01]">
        
        <div className="relative">
          <div className="absolute -top-20 md:-top-24 left-1/2 transform -translate-x-1/2 w-32 h-32 md:w-40 md:h-40">
            <img
              src={doctorInfo.profileImageUrl}
              alt={`صورة ${doctorInfo.name}`}
              className="w-full h-full rounded-full object-cover border-4 border-sky-500 shadow-lg"
            />
          </div>
        </div>

        {/* Add margin top to push content below the absolutely positioned image */}
        <div className="mt-16 md:mt-20">
          <h1 className="text-3xl md:text-4xl font-bold text-sky-700 mb-2">
            {doctorInfo.name}
          </h1>

          <p className="text-xl text-sky-600 font-semibold mb-6">
            {doctorInfo.specialty}
          </p>

          <p className="text-slate-700 text-right leading-relaxed mb-8 px-2 md:px-4 text-base md:text-lg">
            {doctorInfo.bio}
          </p>
        </div>

        <div className="border-t border-slate-200 pt-8">
          <h2 className="text-xl font-semibold text-slate-700 mb-6">
            تواصل معي عبر
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {doctorInfo.facebookUrl && (
              <a
                href={doctorInfo.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-2.5 bg-sky-600 hover:bg-sky-700 text-white rounded-lg transition-all duration-300 group shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                aria-label={`صفحة ${doctorInfo.name} على فيسبوك`}
              >
                <FacebookIcon className="w-5 h-5 mr-2.5 transform transition-transform group-hover:rotate-[360deg] duration-500" />
                <span>فيسبوك</span>
              </a>
            )}
            {/* Example for other social links - uncomment and provide URLs in doctorInfo to activate */}
            {/* {doctorInfo.linkedInUrl && (
              <a
                href={doctorInfo.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-2.5 bg-blue-700 hover:bg-blue-800 text-white rounded-lg transition-all duration-300 group shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                aria-label={`صفحة ${doctorInfo.name} على لينكدإن`}
              >
                <LinkedInIcon className="w-5 h-5 mr-2.5 transform transition-transform group-hover:scale-110 duration-300" />
                <span>لينكدإن</span>
              </a>
            )}
            {doctorInfo.twitterUrl && (
              <a
                href={doctorInfo.twitterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-2.5 bg-sky-500 hover:bg-sky-600 text-white rounded-lg transition-all duration-300 group shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                aria-label={`صفحة ${doctorInfo.name} على تويتر`}
              >
                <TwitterIcon className="w-5 h-5 mr-2.5 transform transition-transform group-hover:scale-110 duration-300" />
                <span>تويتر</span>
              </a>
            )}
            {doctorInfo.instagramUrl && (
              <a
                href={doctorInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-2.5 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:from-pink-600 hover:via-red-600 hover:to-yellow-600 text-white rounded-lg transition-all duration-300 group shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                aria-label={`صفحة ${doctorInfo.name} على إنستاغرام`}
              >
                <InstagramIcon className="w-5 h-5 mr-2.5 transform transition-transform group-hover:scale-110 duration-300" />
                <span>إنستاغرام</span>
              </a>
            )} */}
          </div>
        </div>
      </main>

      <footer className="mt-12 text-center text-sm text-slate-600">
        <p>&copy; {new Date().getFullYear()} {doctorInfo.name}. جميع الحقوق محفوظة.</p>
        <p className="mt-1">تصميم وتطوير بواسطة محرك الذكاء الاصطناعي</p>
      </footer>
    </div>
  );
};

export default App;
