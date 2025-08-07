#!/bin/bash
# Script de Verificação SEO - MyTools.guru

echo "=== Verificação SEO Completa ==="
echo ""

echo "1. Verificando DNS:"
nslookup mytools.guru
echo ""

echo "2. Verificando HTTPS:"
curl -I https://mytools.guru/ 2>/dev/null | head -5
echo ""

echo "3. Verificando Sitemap:"
curl -I https://mytools.guru/sitemap.xml 2>/dev/null | head -3
echo ""

echo "4. Verificando Robots.txt:"
curl -I https://mytools.guru/robots.txt 2>/dev/null | head -3
echo ""

echo "5. Verificando redirects GitHub:"
curl -I https://zagadelha.github.io/my-tools/ 2>/dev/null | head -5
echo ""

echo "=== Verificação Concluída ==="
