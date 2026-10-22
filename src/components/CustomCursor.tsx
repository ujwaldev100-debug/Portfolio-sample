import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useMotionValue } from 'framer-motion';
import { useFinePointer, useReducedMotionPref } from '../hooks/useMedia';

const LABELS: Record<string, string> = {
  view: 'VIEW',
  play: '▶',
  link: '↗',
  drag: '↔',
  close: '✕',
};

export default function CustomCursor() {
  const fine = useFinePointer();
  const reduced = useReducedMotionPref();
  const enabled = fine && !reduced;

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const [mode, setMode] = useState<string | null>(null);
  const [hoverLink, setHoverLink] = useState(false);
  const [visible, setVisible] = useState(false);
  const [down, setDown] = useState(false);

  useEffect(() => {
    if (!enabled) return;

    document.documentElement.classList.add('has-custom-cursor');

    const move = (e: PointerEvent) => {
      // Ignore non-mouse pointers.
      if (e.pointerType !== 'mouse') return;

      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);

      const target = e.target as HTMLElement | null;
      const tagged = target?.closest<HTMLElement>('[data-cursor]');

      setMode(tagged?.dataset.cursor ?? null);
      setHoverLink(
        !tagged && !!target?.closest('a, button, [role="button"]')
      );
    };

    const hide = () => {
      setVisible(false);
      setDown(false);
      setMode(null);
      setHoverLink(false);
    };

    const handlePointerOut = (e: PointerEvent) => {
      // Hide when the pointer actually leaves the browser viewport.
      if (!e.relatedTarget && e.pointerType === 'mouse') {
        hide();
      }
    };

    const handleWindowBlur = () => hide();

    const handlePointerDown = () => setDown(true);
    const handlePointerUp = () => setDown(false);

    window.addEventListener('pointermove', move, { passive: true });
    document.addEventListener('pointerout', handlePointerOut);
    window.addEventListener('blur', handleWindowBlur);
    window.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointerup', handlePointerUp);
    document.addEventListener('mouseleave', hide);

    return () => {
      document.documentElement.classList.remove('has-custom-cursor');
      window.removeEventListener('pointermove', move);
      document.removeEventListener('pointerout', handlePointerOut);
      window.removeEventListener('blur', handleWindowBlur);
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointerup', handlePointerUp);
      document.removeEventListener('mouseleave', hide);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  const label = mode ? LABELS[mode] : null;
  const size = label ? (mode === 'view' ? 38 : 26) : hoverLink ? 24 : 12;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[200] flex items-center justify-center rounded-full"
      style={{
        x,
        y,
        translateX: '-50%',
        translateY: '-50%',
      }}
      animate={{
        width: size,
        height: size,
        opacity: visible ? 1 : 0,
        scale: down ? 0.85 : 1,
        backgroundColor: label
          ? 'rgba(229,19,43,0.92)'
          : hoverLink
            ? 'rgba(244,241,236,0.08)'
            : 'rgba(244,241,236,1)',
        borderColor:
          hoverLink && !label
            ? 'rgba(244,241,236,0.7)'
            : 'rgba(244,241,236,0)',
      }}
      transition={{
        width: { duration: 0.15, ease: 'easeOut' },
        height: { duration: 0.15, ease: 'easeOut' },
        opacity: { duration: 0.12 },
        scale: { duration: 0.1 },
        backgroundColor: { duration: 0.15 },
        borderColor: { duration: 0.15 },
      }}
    >
      <span
        className="absolute inset-0 rounded-full border"
        style={{ borderColor: 'inherit' }}
      />

      <AnimatePresence>
        {label && (
          <motion.span
            key={label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.12 }}
            className="font-sans text-[11px] font-bold tracking-[0.18em] text-white"
          >
            {label}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
}