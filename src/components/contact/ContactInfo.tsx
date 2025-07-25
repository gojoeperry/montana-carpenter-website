export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-heading font-bold text-[#0F0F0F] mb-6">
          Get In Touch
        </h3>
        
        <div className="space-y-6">
          {/* Phone */}
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-[#0A3A2E] rounded-rustic flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-[#0F0F0F] mb-1">Phone</h4>
              <a 
                href="tel:+14065550123"
                className="text-[#0A3A2E] hover:text-[#083529] transition-colors font-medium"
              >
                (406) 555-0123
              </a>
              <p className="text-sm text-[#333333]">Click to call</p>
            </div>
          </div>
          
          {/* Email */}
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-[#0A3A2E] rounded-rustic flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-[#0F0F0F] mb-1">Email</h4>
              <a 
                href="mailto:info@montanafinishcarpenter.com"
                className="text-[#0A3A2E] hover:text-[#083529] transition-colors font-medium"
              >
                info@montanafinishcarpenter.com
              </a>
            </div>
          </div>
          
          {/* Service Area */}
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-[#0A3A2E] rounded-rustic flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-[#0F0F0F] mb-1">Service Area</h4>
              <p className="text-[#333333] text-sm leading-relaxed">
                Somers, Kalispell, Whitefish, Bigfork, Columbia Falls, Lakeside, Polson
              </p>
            </div>
          </div>
          
          {/* Business Hours */}
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-[#0A3A2E] rounded-rustic flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-[#0F0F0F] mb-1">Business Hours</h4>
              <p className="text-[#333333] text-sm">Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p className="text-[#333333] text-sm">Saturday: By Appointment</p>
              <p className="text-[#333333] text-sm">Sunday: Closed</p>
            </div>
          </div>
          
          {/* Response Time */}
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 bg-[#0A3A2E] rounded-rustic flex items-center justify-center flex-shrink-0">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-[#0F0F0F] mb-1">Response Time</h4>
              <p className="text-[#333333] text-sm">We respond to all inquiries within 24 hours</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Service Area Map Placeholder */}
      <div className="bg-[#FAFAF8] p-6 rounded-rustic border border-[#333333]">
        <h4 className="font-semibold text-[#0F0F0F] mb-4">Our Service Area</h4>
        <div className="aspect-video bg-[#333333] rounded-rustic flex items-center justify-center text-white text-sm">
          <div className="text-center">
            <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 10m0 7V10m0 0L9 7" />
            </svg>
            <p>Interactive map of our service area</p>
            <p className="text-xs opacity-75">Flathead Valley, Montana</p>
          </div>
        </div>
      </div>
    </div>
  );
}