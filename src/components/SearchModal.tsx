import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SearchItem {
  label: string;
  type: "page" | "project" | "service";
  href?: string;
  description?: string;
}

const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  const [query, setQuery] = useState("");
  const [searchItems, setSearchItems] = useState<SearchItem[]>([]);

  // Static pages and services
  const staticItems: SearchItem[] = [
    { label: "Início", type: "page", href: "#home" },
    { label: "Serviços", type: "page", href: "#services" },
    { label: "Projetos", type: "page", href: "#projects" },
    { label: "Contato", type: "page", href: "#contact" },
    { label: "Habilidades", type: "page", href: "#skills" },
    { label: "Desenvolvimento Frontend", type: "service", description: "Interfaces modernas e responsivas" },
    { label: "Desenvolvimento Backend", type: "service", description: "APIs e serviços escaláveis" },
    { label: "Consultoria Técnica", type: "service", description: "Arquitetura e melhores práticas" },
  ];

  useEffect(() => {
    const fetchProjects = async () => {
      const { data } = await supabase
        .from("projects")
        .select("title, description");
      
      const projectItems: SearchItem[] = (data || []).map((p) => ({
        label: p.title,
        type: "project" as const,
        description: p.description,
        href: "#projects",
      }));

      setSearchItems([...staticItems, ...projectItems]);
    };

    if (isOpen) {
      fetchProjects();
    }
  }, [isOpen]);

  const filteredItems = searchItems.filter(
    (item) =>
      item.label.toLowerCase().includes(query.toLowerCase()) ||
      item.description?.toLowerCase().includes(query.toLowerCase())
  );

  const handleNavigate = (href?: string) => {
    if (href) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    onClose();
    setQuery("");
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "page":
        return "Página";
      case "project":
        return "Projeto";
      case "service":
        return "Serviço";
      default:
        return type;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="fixed top-[20%] left-1/2 -translate-x-1/2 w-full max-w-lg z-50 p-4"
          >
            <div className="bg-card border border-border rounded-2xl shadow-2xl overflow-hidden">
              {/* Search Input */}
              <div className="flex items-center gap-3 p-4 border-b border-border">
                <Search className="w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Pesquisar páginas, projetos, serviços..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none"
                  autoFocus
                />
                <button
                  onClick={onClose}
                  className="p-1 hover:bg-muted rounded-md transition-colors"
                >
                  <X className="w-4 h-4 text-muted-foreground" />
                </button>
              </div>

              {/* Suggestions */}
              <div className="p-2 max-h-64 overflow-y-auto">
                {filteredItems.length > 0 ? (
                  filteredItems.map((item, index) => (
                    <motion.button
                      key={`${item.type}-${item.label}`}
                      onClick={() => handleNavigate(item.href)}
                      className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-muted text-left transition-colors group"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.03 }}
                    >
                      <div>
                        <span className="text-foreground block">{item.label}</span>
                        <span className="text-xs text-muted-foreground">
                          {getTypeLabel(item.type)}
                          {item.description && ` • ${item.description.substring(0, 40)}...`}
                        </span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    </motion.button>
                  ))
                ) : (
                  <p className="text-center text-muted-foreground py-4">
                    Nenhum resultado encontrado
                  </p>
                )}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between px-4 py-3 border-t border-border bg-muted/30">
                <span className="text-xs text-muted-foreground">
                  Pressione <kbd className="px-1.5 py-0.5 bg-muted rounded text-xs">ESC</kbd> para fechar
                </span>
                <span className="text-xs text-muted-foreground">
                  <kbd className="px-1.5 py-0.5 bg-muted rounded text-xs">↵</kbd> para selecionar
                </span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SearchModal;
