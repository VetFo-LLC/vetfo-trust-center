import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { describe, it, expect, beforeAll } from 'vitest';

const DOWNLOADS_DIR = path.join(process.cwd(), 'public', 'downloads');

describe('PDF generation', () => {
  beforeAll(() => {
    // Run the PDF generation script
    execSync('npx tsx scripts/generate-pdfs.ts', {
      cwd: process.cwd(),
      stdio: 'pipe',
    });
  });

  it('should generate compliance report PDF', () => {
    const file = path.join(DOWNLOADS_DIR, 'vetfo-compliance-report.pdf');
    expect(fs.existsSync(file)).toBe(true);
    expect(fs.statSync(file).size).toBeGreaterThan(1000);
  });

  it('should NOT generate SIG Lite PDF (removed)', () => {
    const file = path.join(DOWNLOADS_DIR, 'questionnaire-sig-lite.pdf');
    expect(fs.existsSync(file)).toBe(false);
  });

  it('should NOT generate SIG Full PDF (removed)', () => {
    const file = path.join(DOWNLOADS_DIR, 'questionnaire-sig-full.pdf');
    expect(fs.existsSync(file)).toBe(false);
  });

  it('compliance report should contain company name', () => {
    const buf = fs.readFileSync(path.join(DOWNLOADS_DIR, 'vetfo-compliance-report.pdf'));
    const text = buf.toString('latin1');
    expect(text).toContain('VetFo');
  });
});
