export default function LoginPage() {
  return (
    <div className="flex h-screen">
      {/* Left panel — hidden on mobile */}
      <div className="hidden md:flex w-[420px] flex-shrink-0 flex-col justify-between bg-navy-900 p-10">
        <div>
          <span className="text-base font-semibold text-white">Counsel</span>
          <span className="ml-1 text-sm font-medium text-gold">CRM</span>
        </div>
        <p className="text-2xl font-light text-white/70 leading-snug">
          Practice smarter.<br />Serve better.
        </p>
        <p className="text-sm text-white/40">
          Trusted by law firms across the country
        </p>
      </div>

      {/* Right panel */}
      <div className="flex flex-1 items-center justify-center bg-white p-8">
        <div className="w-full max-w-sm">
          <h1 className="text-xl font-semibold text-gray-900">Welcome back</h1>
          <p className="mt-1 mb-6 text-sm text-gray-400">Sign in to your account</p>

          <form className="space-y-3">
            <div>
              <label htmlFor="email" className="block text-xs font-medium text-gray-600 mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@lawfirm.com"
                className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 outline-none focus:border-navy-900/50 focus:ring-2 focus:ring-navy-900/20"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label htmlFor="password" className="block text-xs font-medium text-gray-600">
                  Password
                </label>
                <a href="#" className="text-xs text-gray-400 hover:text-gray-600 transition-colors">
                  Forgot password?
                </a>
              </div>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 outline-none focus:border-navy-900/50 focus:ring-2 focus:ring-navy-900/20"
              />
            </div>

            <button
              type="submit"
              className="mt-2 w-full rounded-md bg-navy-900 py-2.5 text-sm font-medium text-white transition-colors hover:bg-navy-800"
            >
              Sign in
            </button>
          </form>

          <div className="my-5 flex items-center gap-3">
            <div className="h-px flex-1 bg-gray-100" />
            <span className="text-xs text-gray-400">or</span>
            <div className="h-px flex-1 bg-gray-100" />
          </div>

          <button
            type="button"
            className="flex w-full items-center justify-center gap-2 rounded-md border border-gray-200 bg-white px-3 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
          >
            <span className="text-base font-semibold leading-none text-gray-600">G</span>
            Continue with Google
          </button>

          <p className="mt-6 text-center text-xs text-gray-400">
            Don&apos;t have an account?{' '}
            <a href="#" className="text-navy-900 hover:underline font-medium">
              Request access
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
