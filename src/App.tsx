/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TheGap from "./components/TheGap";
import HowItWorks from "./components/HowItWorks";
import TheScience from "./components/TheScience";
import Waitlist from "./components/Waitlist";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <TheGap />
        <HowItWorks />
        <TheScience />
        <Waitlist />
      </main>
      <Footer />
    </div>
  );
}
