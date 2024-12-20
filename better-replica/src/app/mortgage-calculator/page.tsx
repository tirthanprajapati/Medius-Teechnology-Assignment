"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function MortgageCalculator() {
  const [homePrice, setHomePrice] = useState<number | "">(0);
  const [downPayment, setDownPayment] = useState<number | "">(0);
  const [interestRate, setInterestRate] = useState<number | "">(0);
  const [loanTerm, setLoanTerm] = useState<number | "">(30); // Default 30 years
  const [propertyTax, setPropertyTax] = useState<number | "">(0);
  const [homeInsurance, setHomeInsurance] = useState<number | "">(0);
  const [monthlyPayment, setMonthlyPayment] = useState<number | "">(0);

  // Function to calculate the monthly mortgage payment
  const calculateMortgage = (): void => {
    const principal = (homePrice as number) - (downPayment as number);
    const calculatedInterest = (interestRate as number) / 100 / 12; // Monthly interest rate
    const payments = (loanTerm as number) * 12; // Number of payments (in months)

    const x = Math.pow(1 + calculatedInterest, payments);
    const monthlyPrincipalAndInterest = (principal * x * calculatedInterest) / (x - 1);

    const monthlyPropertyTax = (propertyTax as number) / 12;
    const monthlyHomeInsurance = (homeInsurance as number) / 12;

    const totalMonthlyPayment = monthlyPrincipalAndInterest + monthlyPropertyTax + monthlyHomeInsurance;

    setMonthlyPayment(parseFloat(totalMonthlyPayment.toFixed(2))); // Limit to 2 decimal places
  };

  return (
    <div className="max-w-lg mx-auto bg-white shadow-md p-6 rounded-lg mt-10">
      <nav className="bg-green-800 text-white py-4">
        <div className="flex justify-around">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/start" className="hover:underline">Start</Link>
          <Link href="/mortgage-calculator" className="hover:underline ">Mortgage Calculator</Link>
          <Link href="/about-us" className="hover:underline">About Us</Link>
        </div>
      </nav>

      <h1 className="text-2xl text-black font-bold mb-4">Mortgage Calculator</h1>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Home Price</label>
        <input
          type="number"
          value={homePrice || ""} // Ensure value is a string to prevent NaN
          onChange={(e) => setHomePrice(e.target.value ? parseFloat(e.target.value) : 0)} // Handle empty input
          className="mt-1 p-2 block w-full border rounded-md text-black"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Down Payment</label>
        <input
          type="number"
          value={downPayment || ""}
          onChange={(e) => setDownPayment(e.target.value ? parseFloat(e.target.value) : 0)}
          className="mt-1 p-2 block w-full border rounded-md text-black"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Interest Rate (%)</label>
        <input
          type="number"
          value={interestRate || ""}
          onChange={(e) => setInterestRate(e.target.value ? parseFloat(e.target.value) : 0)}
          className="mt-1 p-2 block w-full border rounded-md text-black"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Loan Term (Years)</label>
        <input
          type="number"
          value={loanTerm || ""}
          onChange={(e) => setLoanTerm(e.target.value ? parseInt(e.target.value) : 30)} // Default to 30 if empty
          className="mt-1 p-2 block w-full border rounded-md text-black"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Property Tax (Annual)</label>
        <input
          type="number"
          value={propertyTax || ""}
          onChange={(e) => setPropertyTax(e.target.value ? parseFloat(e.target.value) : 0)}
          className="mt-1 p-2 block w-full border rounded-md text-black"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Home Insurance (Annual)</label>
        <input
          type="number"
          value={homeInsurance || ""}
          onChange={(e) => setHomeInsurance(e.target.value ? parseFloat(e.target.value) : 0)}
          className="mt-1 p-2 block w-full border rounded-md text-black"
        />
      </div>

      <button
        onClick={calculateMortgage}
        className="bg-green-800 text-white py-2 px-4 rounded hover:bg-green-700"
      >
        Calculate
      </button>

      {typeof monthlyPayment === 'number' && monthlyPayment > 0 && (
        <div className="mt-4 text-lg font-bold text-black">
          Monthly Payment: ${monthlyPayment}
        </div>
      )}
    </div>
  );
}