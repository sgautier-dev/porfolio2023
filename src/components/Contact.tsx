import { Button } from '@/components/Button'

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-slate-100 stroke-slate-400 dark:fill-slate-100/10 dark:stroke-slate-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-slate-400 dark:stroke-slate-500"
      />
    </svg>
  )
}
export default function Contact() {
  return (
    <form
      action="/thank-you"
      className="rounded-2xl border border-slate-100 p-6 dark:border-slate-700/40"
    >
      <h2 className="flex text-sm font-semibold text-slate-900 dark:text-slate-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Restons en contact</span>
      </h2>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
        Envie d&apos;un site web performant ou curieux de la méditation ?
        Laissez-moi un message. Réponse rapide garantie !
      </p>
      <div className="mt-6 flex flex-col">
        <input
          type="text"
          placeholder="Nom complet"
          aria-label="Nom complet"
          required
          className="form-input mb-4"
        />
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="form-input mb-4"
        />
        <textarea
          placeholder="Votre message"
          aria-label="Message"
          required
          rows={4}
          className="form-input mb-4"
        ></textarea>
        <Button type="submit" className="self-end">
          Envoyer
        </Button>
      </div>
    </form>
  )
}
