'use client';

import React, { useState } from 'react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Laptop, Smartphone, Wifi, Trash2, Plus, Clock } from 'lucide-react';

interface DeviceItem {
  id: string;
  name: string;
  platform: string;
  icon: React.ComponentType<{ className?: string }>;
  lastSeen: string;
  ip: string;
  status: 'active' | 'idle';
}

export default function AppDevicesPage() {
  const [devices, setDevices] = useState<DeviceItem[]>([
    {
      id: 'dev-1',
      name: 'Windows Workstation (Dell XPS)',
      platform: 'Windows 11 64-bit',
      icon: Laptop,
      lastSeen: 'هم‌اکنون فعال',
      ip: '10.202.10.10 (DoH)',
      status: 'active'
    },
    {
      id: 'dev-2',
      name: 'Samsung Galaxy S24 Ultra',
      platform: 'Android 14 (Private DNS)',
      icon: Smartphone,
      lastSeen: '۴ دقیقه پیش',
      ip: 'dns.neta.land (DoT)',
      status: 'active'
    }
  ]);

  const removeDevice = (id: string) => {
    setDevices((prev) => prev.filter((d) => d.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#26364D]/60">
        <div>
          <h1 className="text-2xl font-black text-[#E6EDF7] tracking-tight">
            دستگاه‌های متصل به حساب
          </h1>
          <p className="text-xs text-[#A9B7CB] mt-1">
            شما ۲ دستگاه از حداکثر ۳ دستگاه همزمان پلن Personal Pro را فعال کرده‌اید.
          </p>
        </div>

        <Button variant="primary" size="sm" leftIcon={<Plus className="w-4 h-4" />}>
          اتصال دستگاه جدید
        </Button>
      </div>

      <div className="space-y-4">
        {devices.map((dev) => {
          const Icon = dev.icon;
          return (
            <div
              key={dev.id}
              className="p-5 rounded-2xl bg-[#121D30] border border-[#26364D] flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#18263B] border border-[#26364D] flex items-center justify-center text-[#38D9F5]">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-bold text-[#E6EDF7]">{dev.name}</h3>
                    <Badge variant="success" size="sm" dot>{dev.lastSeen}</Badge>
                  </div>
                  <div className="text-xs text-[#A9B7CB] font-mono mt-1">
                    {dev.platform} • {dev.ip}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => removeDevice(dev.id)}
                  leftIcon={<Trash2 className="w-3.5 h-3.5 text-[#F16D7A]" />}
                >
                  حذف دستگاه
                </Button>
              </div>
            </div>
          );
        })}

        {devices.length === 0 && (
          <div className="text-center py-16 bg-[#121D30] rounded-2xl border border-[#26364D]">
            <p className="text-xs text-[#A9B7CB]">هیچ دستگاه فعالی ثبت نشده است.</p>
          </div>
        )}
      </div>
    </div>
  );
}
