import BlurFade from "@/components/magicui/blur-fade";
import { TestimonialCard } from "@/components/testimonial-card";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function TestimonialsSection() {
  return (
    <section id="testimonials">
      <div className="flex min-h-0 flex-col gap-y-8">
        <div className="flex flex-col items-center justify-center gap-y-4">
          <div className="flex w-full items-center">
            <div className="h-px flex-1 bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="z-10 rounded-xl border bg-primary px-4 py-1">
              <span className="text-sm font-medium text-background">
                {DATA.sections.testimonials.label}
              </span>
            </div>
            <div className="h-px flex-1 bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
          <div className="flex flex-col items-center justify-center gap-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              {DATA.sections.testimonials.heading}
            </h2>
            <p className="max-w-lg text-balance text-center text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
              {DATA.sections.testimonials.text}
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-[800px] auto-rows-fr grid-cols-1 gap-3 sm:grid-cols-2">
          {DATA.testimonials.map((testimonial, id) => (
            <BlurFade
              key={`${testimonial.name}-${id}`}
              delay={BLUR_FADE_DELAY * 14 + id * 0.05}
              className="h-full"
            >
              <TestimonialCard
                quote={testimonial.quote}
                name={testimonial.name}
                title={testimonial.title}
                company={testimonial.company}
                image={testimonial.image}
              />
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
