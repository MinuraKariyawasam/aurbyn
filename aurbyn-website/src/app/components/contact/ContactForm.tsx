'use client'
import { useState } from 'react'

export default function ContactForm() {
  const [formType, setFormType] = useState('startup')
  
  return (
    <div className="bg-white py-20 px-8">
      <div className="mx-auto max-w-xl">
        <div className="mb-8">
          <div className="flex gap-4 p-1 bg-gray-100 rounded-lg">
            <button
              onClick={() => setFormType('startup')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium ${
                formType === 'startup' 
                  ? 'bg-white shadow-sm text-[#2E294E]' 
                  : 'text-gray-500'
              }`}
            >
              Startup Inquiry
            </button>
            <button
              onClick={() => setFormType('general')}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium ${
                formType === 'general' 
                  ? 'bg-white shadow-sm text-[#2E294E]' 
                  : 'text-gray-500'
              }`}
            >
              General Inquiry
            </button>
          </div>
        </div>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#1B998B] focus:border-[#1B998B]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#1B998B] focus:border-[#1B998B]"
            />
          </div>

          {formType === 'startup' && (
            <>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#1B998B] focus:border-[#1B998B]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Investment Stage
                </label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#1B998B] focus:border-[#1B998B]">
                  <option>Pre-seed</option>
                  <option>Seed</option>
                  <option>Series A</option>
                </select>
              </div>
            </>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              rows={6}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#1B998B] focus:border-[#1B998B]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#1B998B] text-white py-3 px-6 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}