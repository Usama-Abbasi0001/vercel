import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

function Nav() {
  // Individual useState for each dropdown
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isEnterpriseOpen, setIsEnterpriseOpen] = useState(false);
  const [isDocsOpen, setIsDocsOpen] = useState(false);
  const [isPricingOpen, setIsPricingOpen] = useState(false);

  // Individual toggle functions for each dropdown
  const toggleProducts = () => {
    setIsProductsOpen(!isProductsOpen);
    // Close other dropdowns when one opens
    setIsResourcesOpen(false);
    setIsSolutionsOpen(false);
    setIsEnterpriseOpen(false);
    setIsDocsOpen(false);
    setIsPricingOpen(false);
  };

  const toggleResources = () => {
    setIsResourcesOpen(!isResourcesOpen);
    // Close other dropdowns when one opens
    setIsProductsOpen(false);
    setIsSolutionsOpen(false);
    setIsEnterpriseOpen(false);
    setIsDocsOpen(false);
    setIsPricingOpen(false);
  };

  const toggleSolutions = () => {
    setIsSolutionsOpen(!isSolutionsOpen);
    // Close other dropdowns when one opens
    setIsProductsOpen(false);
    setIsResourcesOpen(false);
    setIsEnterpriseOpen(false);
    setIsDocsOpen(false);
    setIsPricingOpen(false);
  };

  return (
    <div className="p-5 lg:flex space-x-4 hidden">
      {/* Products Dropdown */}
      <div className="relative">
        <button 
          onClick={toggleProducts}
          className="flex items-center cursor-pointer"
        >
          Products
          {isProductsOpen ? (
            <ChevronUpIcon className="ml-1 h-4 w-4" />
          ) : (
            <ChevronDownIcon className="ml-1 h-4 w-4" />
          )}
        </button>
        
        {isProductsOpen && (
          <div className="absolute left-0 mt-2 w-[700px] bg-black text-white rounded-lg shadow-xl border border-gray-700 z-50">
            <div className="p-2 flex justify-between">
              {/* AI Cloud Section */}
              <div className="mb-6 w-[200px]">
                <h3 className="text-lg font-semibold text-gray-400 mb-3">AI Cloud</h3>
                <div className="space-y-3">
                  <div className="group cursor-pointer">
                    <div className="font-medium text-white">AI SDK</div>
                    <div className="text-sm text-gray-400 mt-1">The AI Toolkit for TypeScript</div>
                  </div>
                  <div className="group cursor-pointer">
                    <div className="font-medium text-white">AI Gateway</div>
                    <div className="text-sm text-gray-400 mt-1">One endpoint, all your models</div>
                  </div>
                  <div className="group cursor-pointer">
                    <div className="font-medium text-white">Vercel Agent</div>
                    <div className="text-sm text-gray-400 mt-1">An agent that knows your stack</div>
                  </div>
                </div>
              </div>

              {/* Core Platform Section */}
              <div className="mb-6 w-[200px]">
                <h3 className="text-lg font-semibold text-gray-400 mb-3">Core Platform</h3>
                <div className="space-y-3">
                  <div className="group cursor-pointer">
                    <div className="font-medium text-white">CI/CD</div>
                    <div className="text-sm text-gray-400 mt-1">Helping teams ship 6× faster</div>
                  </div>
                  <div className="group cursor-pointer">
                    <div className="font-medium text-white">Content Delivery</div>
                    <div className="text-sm text-gray-400 mt-1">Fast, scalable, and reliable</div>
                  </div>
                  <div className="group cursor-pointer">
                    <div className="font-medium text-white">Fluid Compute</div>
                    <div className="text-sm text-gray-400 mt-1">Servers, in serverless form</div>
                  </div>
                  <div className="group cursor-pointer">
                    <div className="font-medium text-white">Observability</div>
                    <div className="text-sm text-gray-400 mt-1">Trace every step</div>
                  </div>
                </div>
              </div>

              {/* Security Section */}
              <div className="mb-2 w-[200px]">
                <h3 className="text-lg font-semibold text-gray-400 mb-3">Security</h3>
                <div className="space-y-3">
                  <div className="group cursor-pointer">
                    <div className="font-medium text-white">Bot Management</div>
                    <div className="text-sm text-gray-400 mt-1">Scalable bot protection</div>
                  </div>
                  <div className="group cursor-pointer">
                    <div className="font-medium text-white">BotID</div>
                    <div className="text-sm text-gray-400 mt-1">Invisible CAPTCHA</div>
                  </div>
                  <div className="group cursor-pointer">
                    <div className="font-medium text-white">Platform Security</div>
                    <div className="text-sm text-gray-400 mt-1">DDoS Protection, Firewall</div>
                  </div>
                  <div className="group cursor-pointer">
                    <div className="font-medium text-white">Web Application Firewall</div>
                    <div className="text-sm text-gray-400 mt-1">Granular, custom protection</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Resources Dropdown */}
      <div className="relative">
        <button
          onClick={toggleResources}
          className="flex items-center cursor-pointer"
        >
          Resources
          {isResourcesOpen ? (
            <ChevronUpIcon className="ml-1 h-4 w-4" />
          ) : (
            <ChevronDownIcon className="ml-1 h-4 w-4" />
          )}
        </button>
        {isResourcesOpen && (
          <div className="absolute left-0 mt-2 w-[700px] bg-black text-white rounded-lg shadow-xl border border-gray-700 z-50">
            <div className="p-2 flex justify-between">
              {/* AI Cloud Section */}
              <div className="mb-6 w-[200px]">
                <h3 className="text-lg font-semibold text-gray-400 mb-3">Company</h3>
                <div className="space-y-3">
                  <div className="group cursor-pointer">
                    <div className="font-medium text-white">Customers</div>
                    <div className="text-sm text-gray-400 mt-1">Trusted by the best teams</div>
                  </div>
                  <div className="group cursor-pointer">
                    <div className="font-medium text-white">Blog </div>
                    <div className="text-sm text-gray-400 mt-1">The latest posts and changes</div>
                  </div>
                  <div className="group cursor-pointer">
                    <div className="font-medium text-white">Changelog </div>
                    <div className="text-sm text-gray-400 mt-1">See what shipped</div>
                  </div>
                    <div className="group cursor-pointer">
                    <div className="font-medium text-white">Press</div>
                    <div className="text-sm text-gray-400 mt-1">Read the latest news</div>
                  </div>
                    <div className="group cursor-pointer">
                    <div className="font-medium text-white">Events </div>
                    <div className="text-sm text-gray-400 mt-1">Join us at an event</div>
                  </div>
                </div>
              </div>

              {/* Core Platform Section */}
              <div className="mb-6 w-[200px]">
                <h3 className="text-lg font-semibold text-gray-400 mb-3">Open Source</h3>
                <div className="space-y-3">
                  <div className="group cursor-pointer">
                    <div className="font-medium text-white">Next.js</div>
                    <div className="text-sm text-gray-400 mt-1">The native Next.js platform</div>
                  </div>
                  <div className="group cursor-pointer">
                    <div className="font-medium text-white">Nuxt</div>
                    <div className="text-sm text-gray-400 mt-1">The progressive web framework</div>
                  </div>
                  <div className="group cursor-pointer">
                    <div className="font-medium text-white">Svelte </div>
                    <div className="text-sm text-gray-400 mt-1">The web's efficient UI framework</div>
                  </div>
                  <div className="group cursor-pointer">
                    <div className="font-medium text-white">Turborepo </div>
                    <div className="text-sm text-gray-400 mt-1">Speed with Enterprise scale</div>
                  </div>
                </div>
              </div>

              {/* Security Section */}
              <div className="mb-2 w-[200px]">
                <h3 className="text-lg font-semibold text-gray-400 mb-3">Tools</h3>
                <div className="space-y-3">
                  <div className="group cursor-pointer">
                    <div className="font-medium text-white">Academy </div>
                    <div className="text-sm text-gray-400 mt-1">Learn the ins and outs of Vercel</div>
                  </div>
                  <div className="group cursor-pointer">
                    <div className="font-medium text-white">Marketplace </div>
                    <div className="text-sm text-gray-400 mt-1">Extend and automate workflows</div>
                  </div>
                  <div className="group cursor-pointer">
                    <div className="font-medium text-white">Templates</div>
                    <div className="text-sm text-gray-400 mt-1">Jumpstart app development</div>
                  </div>
                  <div className="group cursor-pointer">
                    <div className="font-medium text-white">Guides </div>
                    <div className="text-sm text-gray-400 mt-1">Find help quickly</div>
                  </div>
                  <div className="group cursor-pointer">
                    <div className="font-medium text-white">Partner Finder</div>
                    <div className="text-sm text-gray-400 mt-1"> Get help from solution partners</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Solutions Dropdown */}
      <div className="relative">
        <button 
          onClick={toggleSolutions}
          className="flex items-center cursor-pointer"
        >
          Solutions
          {isSolutionsOpen ? (
            <ChevronUpIcon className="ml-1 h-4 w-4" />
          ) : (
            <ChevronDownIcon className="ml-1 h-4 w-4" />
          )}
        </button>
        {isSolutionsOpen && (
          <div className="absolute left-0 mt-2 w-[300px] bg-black text-white rounded-lg shadow-xl border border-gray-700 z-50 p-4">
            <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-400 mb-3">Use Cases</h3>
              <div className="group cursor-pointer">
                <div className="font-medium text-white">Al Apps</div>
                <div className="text-sm text-gray-400 mt-1">Deploy at the speed of Al</div>
              </div>
              <div className="group cursor-pointer">
                <div className="font-medium text-white">Composable Commerce</div>
                <div className="text-sm text-gray-400 mt-1"> Power storefronts that convert</div>
              </div>
              <div className="group cursor-pointer">
                <div className="font-medium text-white">Marketing Sites</div>
                <div className="text-sm text-gray-400 mt-1">Launch campaigns fast</div>
              </div>
              <div className="group cursor-pointer">
                <div className="font-medium text-white">Multi-tenant Platforms</div>
                <div className="text-sm text-gray-400 mt-1">Scale apps with one codebase</div>
              </div><div className="group cursor-pointer">
                <div className="font-medium text-white">Web Apps</div>
                <div className="text-sm text-gray-400 mt-1">Ship features, not infrastructure</div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Enterprise Dropdown */}
      <div className="relative">
        <button 
          className="flex items-center cursor-pointer" >Enterprise
        </button>
      </div>

      {/* Docs Dropdown */}
      <div className="relative">
        <button 
        
          className="flex items-center cursor-pointer"
        > Docs
        </button>
       
      </div>

      {/* Pricing Dropdown */}
      <div className="relative">
        <button 
          className="flex items-center cursor-pointer"
        >
          Pricing
       
        </button>
       
      </div>
    </div>
  );
}

export default Nav;