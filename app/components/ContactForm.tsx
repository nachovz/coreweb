
type Props = {
	open: boolean;
	onClose: () => void;
}

export default function ContactForm({ open, onClose }: Props) {
	if (!open) return null;

	return (
		<div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
			<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

			<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
				<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
					<div className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:mt-20 sm:w-full sm:max-w-lg sm:p-6">
						<div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
							<button type="button" className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" onClick={onClose}>
								<span className="sr-only">Close</span>
								<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
									<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
								</svg>
							</button>
						</div>
						<div className="sm:flex sm:items-start">
							<form>
								<div className="space-y-12">
									<div className="border-b border-gray-900/10 pb-12">
										<h2 className="text-base font-semibold leading-7 text-gray-900">Ready to transform your business? Get in touch.</h2>
										<p className="mt-1 text-sm leading-6 text-gray-600">Unlock your business potential. Contact us for a free consultation.</p>

										<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

											<div className="sm:col-span-4">
												<label htmlFor="fullname" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
												<div className="mt-2">
													<div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
														<input type="text" name="fullname" id="fullname" autoComplete="fullname" className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Your name"/>
													</div>
												</div>
											</div>

											<div className="sm:col-span-4">
												<label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
												<div className="mt-2">
													<div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
														<input type="text" name="email" id="email" autoComplete="email" className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="awesome@email.com"/>
													</div>
												</div>
											</div>

											<div className="col-span-full">
												<label htmlFor="project" className="block text-sm font-medium leading-6 text-gray-900">Project/Inquiry</label>
												<div className="mt-2">
													<textarea id="project" name="project" rows={3} className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
												</div>
												<p className="mt-3 text-sm leading-6 text-gray-600">Let's bring your vision to life. Describe your project or idea.</p>
												<p className="mt-3 text-sm leading-6 text-gray-600">Need more guidance? Tell us what problem you're solving or what you hope to achieve.</p>
											</div>
										</div>
									</div>

								</div>

								<div className="mt-6 flex items-center justify-end gap-x-6">
									<button type="button" className="text-sm font-semibold leading-6 text-gray-900" onClick={onClose}>Cancel</button>
									<button type="submit" className="rounded-md text-white bg-blue-600 hover:bg-blue-700 px-3 py-2 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Send</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>

	)
}