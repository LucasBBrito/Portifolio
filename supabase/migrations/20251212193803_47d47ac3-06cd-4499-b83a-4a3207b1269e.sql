-- Tabela para solicitações de contato (Request a Call)
CREATE TABLE public.contact_requests (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Tabela para projetos (leitura pública)
CREATE TABLE public.projects (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  techs TEXT[] NOT NULL DEFAULT '{}',
  image TEXT,
  github TEXT,
  live TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.contact_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

-- Política: qualquer pessoa pode inserir um pedido de contato
CREATE POLICY "Anyone can insert contact requests" 
ON public.contact_requests 
FOR INSERT 
WITH CHECK (true);

-- Política: projetos são públicos para leitura
CREATE POLICY "Projects are publicly readable" 
ON public.projects 
FOR SELECT 
USING (true);

-- Inserir projetos de exemplo
INSERT INTO public.projects (title, description, techs, image, github, live) VALUES
('Portfólio de Desenvolvedor', 'Um portfólio moderno e responsivo para desenvolvedores frontend.', ARRAY['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'], null, 'https://github.com', 'https://example.com'),
('Plataforma E-Commerce', 'Solução completa de e-commerce com carrinho, pagamentos e painel admin.', ARRAY['React', 'Node.js', 'MongoDB', 'Stripe'], null, 'https://github.com', 'https://example.com'),
('App de Gerenciamento de Tarefas', 'Aplicativo de produtividade com drag-and-drop e sincronização em tempo real.', ARRAY['React', 'Firebase', 'CSS3', 'PWA'], null, 'https://github.com', 'https://example.com');