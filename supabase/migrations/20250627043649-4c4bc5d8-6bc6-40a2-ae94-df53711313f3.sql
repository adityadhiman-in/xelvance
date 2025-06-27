
-- Create table for contact form submissions
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  project_type TEXT,
  description TEXT,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create table for payment form submissions
CREATE TABLE public.payment_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  mobile TEXT NOT NULL,
  project_title TEXT NOT NULL,
  payment_amount TEXT NOT NULL,
  upi_transaction_id TEXT NOT NULL,
  project_description TEXT NOT NULL,
  screenshot_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security (optional - making these public for now)
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.payment_submissions ENABLE ROW LEVEL SECURITY;

-- Create policies to allow public access (since no auth is required)
CREATE POLICY "Allow public insert on contact_submissions" 
  ON public.contact_submissions 
  FOR INSERT 
  TO public 
  WITH CHECK (true);

CREATE POLICY "Allow public insert on payment_submissions" 
  ON public.payment_submissions 
  FOR INSERT 
  TO public 
  WITH CHECK (true);
