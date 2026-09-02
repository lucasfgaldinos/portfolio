import { EyeIcon } from "@phosphor-icons/react";
import type { Certificate } from "@/data/certificates";
import { useImagesModalStore } from "@/store/useImagesModalStore";
import { BorderTrail } from "./core/border-trail";

type CertificateCardProps = {
  certificate: Certificate;
};

export function CertificateCard({ certificate }: CertificateCardProps) {
  const { openModal } = useImagesModalStore();

  return (
    <article className="group relative mt-3 flex h-full w-full flex-col overflow-hidden rounded-xl border border-border bg-background">
      <BorderTrail duration={5.5} />
      <button
        type="button"
        onClick={() => openModal([certificate.img], certificate.title)}
        className="relative aspect-video w-full cursor-pointer overflow-hidden border-b border-border bg-muted"
        aria-label={`Visualizar certificado ${certificate.title}`}
      >
        <img
          src={certificate.img}
          alt={`Certificado ${certificate.title}`}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition group-hover:bg-black/45 group-hover:opacity-100">
          <span className="flex items-center gap-2 rounded-full bg-background px-4 py-2 text-sm font-medium text-foreground">
            <EyeIcon size={18} /> Ver certificado
          </span>
        </span>
      </button>

      <div className="flex flex-1 flex-col p-4 md:p-5 cursor-grab active:cursor-grabbing">
        <div className="mb-3 flex items-center justify-between gap-3 text-xs font-medium">
          <span className="text-primary">{certificate.issuer}</span>
          {certificate.date && (
            <span className="text-muted-foreground">{certificate.date}</span>
          )}
        </div>

        <h4 className="text-lg font-bold">{certificate.title}</h4>
        <p className="mt-2 text-sm text-muted-foreground">
          {certificate.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {certificate.skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-border bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
