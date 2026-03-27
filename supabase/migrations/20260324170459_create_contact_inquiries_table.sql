/*
  # Create Contact Inquiries Table

  ## Summary
  This migration creates a table to store contact form submissions from the ECO-SOL ENERGIES website.

  ## New Tables
  - `contact_inquiries`
    - `id` (uuid, primary key) - Unique identifier for each inquiry
    - `name` (text) - Full name of the person submitting the inquiry
    - `email` (text) - Email address for follow-up
    - `phone` (text) - Phone number for contact
    - `message` (text) - Detailed message/inquiry from the customer
    - `created_at` (timestamptz) - Timestamp when inquiry was submitted
    - `status` (text) - Status of inquiry (new, contacted, completed)

  ## Security
  - Enable Row Level Security (RLS) on contact_inquiries table
  - Add policy to allow anyone to insert inquiries (public form submission)
  - Add policy to allow authenticated users to read all inquiries (for admin access)
*/

CREATE TABLE IF NOT EXISTS contact_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  message text NOT NULL,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact inquiries"
  ON contact_inquiries
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all inquiries"
  ON contact_inquiries
  FOR SELECT
  TO authenticated
  USING (true);